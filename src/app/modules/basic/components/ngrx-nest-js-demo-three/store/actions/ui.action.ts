import {createAction, props} from '@ngrx/store';

export const setCurrentTitle = createAction(
    '[UI] Set Current Title',
    props<{payload: string}>()
)
