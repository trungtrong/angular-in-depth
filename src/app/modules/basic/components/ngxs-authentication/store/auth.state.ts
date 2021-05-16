import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {Action, State, StateContext} from '@ngxs/store';
//
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
import {
    Login,
    LogInFailure,
    LogInSuccess, Logout,
    SignUp, SignUpFailure,
    SignUpSuccess
} from '@app/modules/basic/components/ngxs-authentication/store/auth.actions';
import {AuthAppFeatureKeys} from '@app/modules/basic/components/ngxs-authentication/app-store/app-feature-key.enum';
import {AuthService} from '@app/modules/basic/components/ngxs-authentication/services/auth.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {A} from '@angular/cdk/keycodes';

export interface IAuthState {
    isAuthenticated: boolean;
    user: UserModel;
    errorMessage: string;
}

const INIT_STATE: IAuthState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
}

@State<IAuthState>({
    name: AuthAppFeatureKeys.Auth,
    defaults: INIT_STATE
})

@Injectable()
export class AuthState {
    constructor(private router: Router,
                private authService: AuthService) {
    }

    // If you have an async action, you may want to cancel a previous Observable if the action has been dispatched again
    @Action(Login, {cancelUncompleted: true})
    login(context: StateContext<IAuthState>, {payload}: Login) {
        return this.authService.logIn(payload.email, payload.password).pipe(
            // call success
            tap((result: { token: string }) => context.dispatch(new LogInSuccess(new UserModel({
                token: result.token,
                email: payload.email
            })))),
            catchError((error) => {
                return context.dispatch(new LogInFailure({error: error}))
            })
        )
    }

    @Action(LogInSuccess)
    loginSuccess(context: StateContext<IAuthState>, {payload}: LogInSuccess) {
        // save user info
        context.patchState({
            isAuthenticated: true,
            user: new UserModel({
                token: payload.token,
                email: payload.email
            }),
            errorMessage: null
        });
        // save token to localstorage
        localStorage.setItem('token', payload.token);
        // navigate to /
        this.router.navigateByUrl('/basic/ngxs-authentication').then();
    }

    @Action(LogInFailure)
    loginFailure(context: StateContext<IAuthState>, {payload}: LogInFailure) {
        // reset Initial_State
        context.setState({
            ...INIT_STATE,
            errorMessage: 'Incorrect email and/or password.'
        });
        // remove token
        localStorage.removeItem('token');
    }

    // Sign Up
    @Action(SignUp)
    signUp(context: StateContext<IAuthState>, {payload}: SignUp) {
        return this.authService.signUp(payload.email, payload.password).pipe(
            // call SignUp Success
            tap((res: UserModel) => context.dispatch(new SignUpSuccess(res))),
            catchError((error) => {
                return context.dispatch(new SignUpFailure({error: error}))
            })
        )
    }

    @Action(SignUpSuccess)
    signUpSuccess(context: StateContext<IAuthState>, {payload}: SignUpSuccess) {
        // show success message
        // navigate to Login
        this.router.navigateByUrl('basic/ngxs-authentication/log-in').then();
    }

    @Action(SignUpFailure)
    signUpFailure(context: StateContext<IAuthState>, {payload}: SignUpFailure) {
        // reset Initial_State
        context.setState({
            ...INIT_STATE,
            errorMessage: 'That email is already in use'
        });
    }

    @Action(Logout)
    logout(context: StateContext<IAuthState>) {
        localStorage.removeItem('token');
        // navigateToLogin()
        this.router.navigateByUrl('basic/ngxs-authentication/log-in').then();
    }
}
