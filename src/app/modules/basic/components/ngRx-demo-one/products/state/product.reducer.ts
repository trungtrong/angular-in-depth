import {createReducer, on, createAction, createFeatureSelector, createSelector} from '@ngrx/store';
//
import {IProduct} from '@app/modules/basic/components/ngRx-demo-one/products/models/product.model';
import {IAppState} from '@app/state/app.state';
import {ProductActions} from '@app/modules/basic/components/ngRx-demo-one/products/state/product.actions';

// to make properties consistent
//  extends IAppState for apply lazy loading Feature Module
export interface IProductLookupState extends IAppState {
    products: IProductState
}

export interface IProductState {
    showProductCode: boolean;
    currentProduct: IProduct;
    currentProductId: number;
    products: IProduct[];
}

const initialState: IProductState = {
    showProductCode: true,
    currentProduct: null,
    currentProductId: null,
    products: []
}

/**
 * Selectors
 */
const getProductFeatureState = createFeatureSelector<IProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    (state) => state.showProductCode
);
export const getCurrentProduct = createSelector(
    getProductFeatureState,
    (state) => state.currentProduct
);
export const getProducts= createSelector(
    getProductFeatureState,
    (state) => state.products
);

export const getCurrentProductId= createSelector(
    getProductFeatureState,
    (state) => state.currentProductId
);

// Composing Selector (max = 8)  => using multiple selectors instead of each selector
export const getSelectedProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) => state.products.find((_) => _.id === currentProductId)
)

/**
 * Reducers with Actions
 */
export const productReducer = createReducer<IProductState>(
    initialState,
    on(ProductActions.toggleProductCode, (state: IProductState): IProductState => {
        console.log('[Product] toggleProductCode');
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }),
    on(ProductActions.setCurrentProduct, (state: IProductState, payload): IProductState => {
        console.log('[Product] setCurrentProduct');
        return {
            ...state,
            currentProduct: payload.product
        }
    }),
    on(ProductActions.initializeCurrentProduct, (state: IProductState, payload): IProductState => {
        console.log('[Product] initializeCurrentProduct');
        return {
            ...state,
            currentProduct: {
                id: 0,
                productName: '',
                productCode: 'New',
                description: '',
                starRating: 0
            }
        }
    }),
    on(ProductActions.loadProductSuccess, (state, payload): IProductState => {
        return {
            ...state,
            products: payload.products
        }
    })
);

/*
 * Reducer using type
 *
 export const productReducer = createReducer<IProductState>(
 initialState,
 on(createAction('[Product] Toggle Product Code', (state: IProductState): IProductState => {
        // tslint:disable-next-line:jsdoc-format
        console.log('[Product] Toggle Product Code');
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }))
 )

 */
