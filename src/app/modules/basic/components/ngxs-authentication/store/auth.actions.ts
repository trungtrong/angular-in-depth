import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login'
}
//
export class Login {
    static readonly type: AuthActionTypes.LOGIN;
    constructor(public payload: UserModel) {
    }
}

export type AuthActions =
    | Login;
