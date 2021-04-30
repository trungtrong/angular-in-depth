import {createReducer, on} from '@ngrx/store';
import {setCurrentTitle} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/actions/ui.action';
import {setState} from '@app/modules/basic/components/ngrx-nest-js-demo-three/helpers/ngrx.helper';

export interface IUiState {
    currentTitle: string;
}

export const INIT_UI_STATE: IUiState  = {
    currentTitle: undefined
};

export const reducer = createReducer(
    INIT_UI_STATE,
    on(setCurrentTitle, (state: IUiState, {payload: currentTitle}) =>
        setState({currentTitle}, state)
    )
)

// SELECTORS
export const getCurrentTitle = (state: IUiState) => state ? state.currentTitle : null;
