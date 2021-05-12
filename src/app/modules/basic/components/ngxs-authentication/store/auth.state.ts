import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
//
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
import {Login} from '@app/modules/basic/components/ngxs-authentication/store/auth.actions';
import {AuthAppFeatureKeys} from '@app/modules/basic/components/ngxs-authentication/app-store/app-feature-key.enum';
import {AuthService} from '@app/modules/basic/components/ngxs-authentication/services/auth.service';

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
    constructor(private authService: AuthService) {
    }

    @Action(Login, {cancelUncompleted: true})
    login(context: StateContext<IAuthState>, {payload}: Login) {
        return this.authService.logIn(payload.email, payload.password).pipe(

        )
    }
}
