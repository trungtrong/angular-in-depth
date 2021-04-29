import {IJoke} from '@app/modules/basic/components/ngrx-demo-two/models/card.model';
import {Action, createReducer, on} from '@ngrx/store';
//
import * as JokeAPIActions from './../api.action';
import * as JokeUIActions from './../ui.actions';

export interface IJokeState {
    jokes: IJoke[];
    isLoading: boolean;
    error: string;
}

export const JokeFeatureKey = 'joke';

export const initialState: IJokeState = {
    jokes: [],
    isLoading: false,
    error: ''
}

const jokeReducer = createReducer(
    initialState,
    on(
        JokeUIActions.appComponentInitialized,
        JokeUIActions.LoadAllRequested,
        (state: IJokeState) => ({
            ...state,
            isLoading: true,
            error: ''
        })
    ),
    on(
        JokeAPIActions.LoadAllSucceeded,
        JokeAPIActions.LoadCategorySucceeded,
        (state: IJokeState, { jokes }) => ({
            ...state,
            jokes: jokes,
            isLoading: false
        })
    ),
    on(
        JokeAPIActions.LoadAllFailed,
        JokeAPIActions.LoadCategoryFailed,
        (state: IJokeState, {error}) => ({
            ...state,
            error,
            isLoading: false
        })
    )
)

export function reducer(state: IJokeState | undefined, action: Action) {
    return jokeReducer(state, action);
}
