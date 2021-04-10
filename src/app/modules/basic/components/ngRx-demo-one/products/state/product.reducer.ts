import { createReducer, on, createAction } from '@ngrx/store';

export const productReducer = createReducer(
    {showProductCode: true},
    on(createAction('[Product] Toggle Product Code', (state: { showProductCode: any; }) => {
        console.log('[Product] Toggle Product Code');
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }))
)
