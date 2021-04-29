import {Action, createAction, props} from '@ngrx/store';
import {IJoke} from '@app/modules/basic/components/ngrx-demo-two/models/card.model';

// Suggested Implementation - Entity Feature Module

export enum ActionTypes {
    LOAD_REQUEST = '[Card] Load Request',
    LOAD_SUCCESS = '[Card] Load Success',
    LOAD_FAILURE = '[Card] Load Failure',
    //
    LOAD_ALL_SUCCESS = '[Card] Load All Success',
    LOAD_ALL_FAILURE = '[Card] Load All Failure',
    //
    LOAD_CATEGORY_SUCCESS = '[Card] Load Category Success',
    LOAD_CATEGORY_FAILURE = '[Card] Load Category Failure',
}

export const LoadRequestAction = createAction(
    ActionTypes.LOAD_REQUEST,
);

export const LoadRequestSuccess = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{ jokes: IJoke[] }>()
);

export const LoadRequestFail = createAction(
    ActionTypes.LOAD_FAILURE,
    props<{ error: string }>()
)

export const LoadAllSucceeded = createAction(
    ActionTypes.LOAD_ALL_SUCCESS,
    props<{ jokes: IJoke[] }>()
);

export const LoadAllFailed = createAction(
    ActionTypes.LOAD_ALL_FAILURE,
    props<{ error: string }>()
);

export const LoadCategorySucceeded = createAction(
    ActionTypes.LOAD_CATEGORY_SUCCESS,
    props<{ jokes: IJoke[] }>()
);

export const LoadCategoryFailed = createAction(
    ActionTypes.LOAD_CATEGORY_FAILURE,
    props<{ error: string }>()
);




// export type Actions =
