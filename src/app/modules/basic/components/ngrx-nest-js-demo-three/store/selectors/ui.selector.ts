import * as UiReducer from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/reducers/ui.reducer';
import {InjectionToken} from '@angular/core';
import {Action, ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface IAppState {
    ui: UiReducer.IUiState
}

// AoT compatibility
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<IAppState, Action>>(
    'ROOT_REDUCERS_TOKEN',
    {
        factory: () => ({
            ui: UiReducer.reducer
        })
    }
);

// Selectors
export const UiFeatureKey = 'ui';

export const getUiState = createFeatureSelector<UiReducer.IUiState>('UiFeatureKey');

export const getCurrentTitle = createSelector(
    getUiState,
    UiReducer.getCurrentTitle
);
