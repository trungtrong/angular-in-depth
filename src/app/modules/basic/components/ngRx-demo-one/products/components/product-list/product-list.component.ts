
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Store} from '@ngrx/store';
//
import { IProduct} from '@app/modules/basic/components/ngRx-demo-one/products/models/product.model';
import { ProductService} from '@app/modules/basic/components/ngRx-demo-one/products/services/product.service';
import {
    getCurrentProduct, getProducts,
    getShowProductCode,
    IProductLookupState
} from '@app/modules/basic/components/ngRx-demo-one/products/state/product.reducer';
import {ProductActions} from '@app/modules/basic/components/ngRx-demo-one/products/state/product.actions';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle = 'Products';
    errorMessage: string;

    displayCode: boolean;

    products: IProduct[];
    products$: any;

    // Used to highlight the selected product in the list
    selectedProduct: IProduct | null;
    sub: Subscription =  Subscription.EMPTY;

    constructor(private store: Store<IProductLookupState>,
                private productService: ProductService) {

    }

    ngOnInit(): void {
        // this.sub.add(this.productService.selectedProductChanges$.subscribe(
        //     currentProduct => this.selectedProduct = currentProduct
        // ));
        //
        // -----------------------------------------------------
        this.productService.getProducts().subscribe({
            next: (products: IProduct[]) => this.products = products,
            error: err => this.errorMessage = err
        });
        this.products$ = this.store.select(getProducts);

        // this.store.dispatch(ProductActions.loadProduct())

        // -----------------------------------------------------
        //
        // this.sub.add(this.store.select('products').subscribe((products) => {
        //     if (products) {
        //         this.displayCode = products.showProductCode;
        //     }
        // }));

        // this.sub.add();
        this.store.select(getCurrentProduct).subscribe((product) => {
            this.selectedProduct = product;
        })
        //
        this.store.select(getShowProductCode).subscribe((showProductCode) => {
            this.displayCode = showProductCode;
        })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    checkChanged(): void {
        // Dispatch with type
        /*
        this.store.dispatch(
            { type: '[Product] Toggle Product Code' }
        );
        */

        // Dispatch with Action
        this.store.dispatch(ProductActions.toggleProductCode());
    }

    newProduct(): void {
        // this.productService.changeSelectedProduct(this.productService.newProduct());
        //
        this.store.dispatch(ProductActions.initializeCurrentProduct());
    }

    productSelected(product: IProduct): void {
        // this.productService.changeSelectedProduct(product);
        //
        this.store.dispatch(ProductActions.setCurrentProduct({ product }));
    }
}
