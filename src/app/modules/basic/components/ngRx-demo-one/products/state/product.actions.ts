import {createAction, props} from '@ngrx/store';
import {IProduct} from '@app/modules/basic/components/ngRx-demo-one/products/models/product.model';

export class ProductActions {
    public static toggleProductCode = createAction(
        '[Product] Toggle Product Code' // type of action (name) => must be unique and meaningful
    );

    public static setCurrentProduct = createAction(
        '[Product] Set Current Product',
        props<{ product: IProduct }>()
    );

    public static clearCurrentProduct = createAction(
        '[Product] Clear Current Product',
    );

    public static initializeCurrentProduct = createAction(
        '[Product] Initialize Current Product',
    );

    public static loadProduct = createAction(
        '[Product] Load Product',
    );

    public static loadProductSuccess = createAction(
        '[Product] Load Product Success',
        props<{ products: IProduct[] }>()
    );

    public static loadProductsFailure = createAction(
        '[Product] Load Product Fail',
        props<{ error: Error }>()
    );
}
