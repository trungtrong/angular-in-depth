import {Selector} from '@ngxs/store';
import {ISaladState, SaladState} from '@app/modules/basic/components/ngxs-salad-example-one/salad/state/salad.state';

export class SaladSelectors {
    // memorized selector
    @Selector([SaladState])
    public static getDressing(state: ISaladState): string {
        return state.dressing;
    }
}
