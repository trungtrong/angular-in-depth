import { createAction, props } from '@ngrx/store';

export const appComponentInitialized = createAction(
    '[App Component] Initialized'
);

export const LoadAllRequested = createAction(
    '[App Component] Load All Requested'
);

export const LoadCategoryRequested = createAction(
    '[App Component] Load Category Requested',
    props<{ category: string }>()
);
