import {Injectable} from '@angular/core';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
//
import {ProductService} from '@app/modules/basic/components/ngRx-demo-one/products/services/product.service';
import {ProductActions} from '@app/modules/basic/components/ngRx-demo-one/products/state/product.actions';
import {of} from 'rxjs';

/**
 * @NgModule({
    imports: [
    ...
        EffectsModule.forFeature([ProductEffects]), // for apply following lazy load Feature Module
    ],
    })
 */
@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions,
                private productService: ProductService) {
    }

    /**
     * ofType(ProductActions.loadProduct) : filter and listen to only loadProduct
     */
    /*
    - b.c ProductEffects is registered in ProductModule
    - createEffect() is called automatically when module is initialized
    */
    // Effect will execute Expression automatically whenever Action - ProductActions.loadProduct is dispatched
    // Observable
    loadProducts$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(ProductActions.loadProduct),
                mergeMap(() => this.productService.getProducts()
                    .pipe(
                        map(products => ProductActions.loadProductSuccess({ products })),
                        catchError(error => of(ProductActions.loadProductsFailure({ error })))
                    )
                )
            );
    });
    /**
     Why using mergeMap instead switchMap

     */
}
