import {Action, Selector, State, StateContext} from '@ngxs/store';
//
import {SaladAppFeatureKeys} from '@app/modules/basic/components/ngxs-salad-example-one/state/salad-app-feature-key.enum';
import {OrderService} from '@app/modules/basic/components/ngxs-salad-example-one/services/order.service';
import {
    ConfirmOrder,
    OrderFailed,
    OrderSuccess,
    SetUserName
} from '@app/modules/basic/components/ngxs-salad-example-one/state/salad-app.actions';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export interface ISaladAppState {
    username: string;
    orderId: number;
    status?: 'pending' | 'confirmed' | 'declined';
}

const INIT_STATE: ISaladAppState = {
    username: '',
    orderId: Math.floor(Math.random() * 23000)
}

@State<ISaladAppState>({
    name: SaladAppFeatureKeys.App,
    defaults: INIT_STATE
})

@Injectable()
export class SaladAppState {
    constructor(private orderService: OrderService) {
    }

    @Selector()
    static appState(state: ISaladAppState) {
        return state;
    }

    @Action(SetUserName)
    setUserName(context: StateContext<ISaladAppState>, {payload}: SetUserName): void {
        context.patchState({username: payload})
    }

    @Action(ConfirmOrder, {cancelUncompleted: true})
    confirm({dispatch, patchState}: StateContext<ISaladAppState>) {
        patchState({ status: 'pending' });
        //
        return this.orderService.post().pipe(
            tap((success) => {
                success ? dispatch(OrderSuccess) : dispatch(OrderFailed)
            })
        )
    }

    @Action(OrderSuccess)
    orderSuccess({patchState}: StateContext<ISaladAppState>) {
        patchState({ status: 'confirmed' });
    }

    @Action(OrderFailed)
    orderFailed({patchState}: StateContext<ISaladAppState>) {
        patchState({ status: 'declined' });
    }
}
