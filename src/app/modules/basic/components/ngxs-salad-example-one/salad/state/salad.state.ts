import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SaladAppFeatureKeys} from '@app/modules/basic/components/ngxs-salad-example-one/state/salad-app-feature-key.enum';
import {AddTopping, StartOrder} from '@app/modules/basic/components/ngxs-salad-example-one/salad/state/salad.actions';
import {Injectable} from '@angular/core';

export interface ISaladState {
    dressing: string;
    price: number;
    toppings: string[];
}

const INIT_STATE: ISaladState = {
    dressing: 'ranch',
    price: 9.99,
    toppings: []
}

@State<ISaladState>({
    name: SaladAppFeatureKeys.Salad,
    defaults: INIT_STATE
})

@Injectable()
export class SaladState {
    // cancelUncompleted = true => it's the same with case using switchMap(): cancel prev observable
    @Action(AddTopping, {cancelUncompleted: true})
    addTopping(context: StateContext<ISaladState>, {payload}: AddTopping) {
        const currentState = context.getState();
        //
        const toppings = [...currentState.toppings, payload];
        context.patchState({
            toppings,
            price: currentState.price + 0.5
        })
    }

    @Action(StartOrder)
    reset(context: StateContext<ISaladState>) {
        context.setState({ ...INIT_STATE })
    }
}
