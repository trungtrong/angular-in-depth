import {IAuthState} from '@app/modules/basic/components/ngxs-authentication/store/auth.selectors';

export interface IAppState {
    authState: IAuthState
}
