import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IJokeState, JokeFeatureKey} from '@app/modules/basic/components/ngrx-demo-two/root-state/card-state/card.reducer';


// Lookup the "Joke" feature store managed by NgRx
const getJokeState = createFeatureSelector<IJokeState>(JokeFeatureKey);
//
export const selectJokeList = createSelector(
    getJokeState,
    (state) => state.jokes
);
//
export const selectJokeError = createSelector(
    getJokeState,
    (state) => state.error
);
//
export const selectJokeIsLoading = createSelector(
    getJokeState,
    (state) => state.isLoading
);

export const selectAppComponentViewModel = createSelector(
    selectJokeList,
    selectJokeError,
    selectJokeIsLoading,
    (jokes, error, loading) => ({
        jokes,
        error,
        loading
    })
)
