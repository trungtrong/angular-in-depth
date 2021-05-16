import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    SIGNUP = '[Auth] Signup',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    SIGNUP_FAILURE = '[Auth] Signup Failure',
    LOGOUT = '[Auth] Logout'
}
//
export class Login {
    static readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: UserModel) {
    }
}

export class LogInSuccess {
    static readonly type =  AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: UserModel) {
    }
}

export class LogInFailure {
    static readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: { error: any }) {
    }
}

export class SignUp {
    static readonly type = AuthActionTypes.SIGNUP;
    constructor(public payload: UserModel) {
    }
}

export class SignUpSuccess {
    static readonly type = AuthActionTypes.SIGNUP_SUCCESS;
    constructor(public payload: UserModel) {
    }
}

export class SignUpFailure {
    static readonly type = AuthActionTypes.SIGNUP_FAILURE;
    constructor(public payload: { error: any }) {
    }
}

export class Logout {
    static readonly type = AuthActionTypes.LOGOUT;
    constructor() {
    }
}

export type AuthActions =
    | Login
    | LogInSuccess
    | LogInFailure
    | SignUp
    | SignUpSuccess
    | SignUpFailure
    | Logout;
