import {Select, Selector} from '@ngxs/store';
import {AuthState, IAuthState} from '@app/modules/basic/components/ngxs-authentication/store/auth.state';

export class AuthSelectors {
    // Must have [AuthState] to detect itself slice state (feature state)
    @Selector([AuthState])
    public static getErrorMessage(state: IAuthState): string {
        return state.errorMessage;
    }

    @Selector([AuthState])
    public static getUserEmail(state: IAuthState): string {
        return state.user?.email;
    }
}
