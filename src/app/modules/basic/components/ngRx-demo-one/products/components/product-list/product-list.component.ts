
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Store} from '@ngrx/store';
//
import { IProduct} from '@app/modules/basic/components/ngRx-demo-one/products/models/product.model';
import { ProductService} from '@app/modules/basic/components/ngRx-demo-one/products/services/product.service';

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

    // Used to highlight the selected product in the list
    selectedProduct: IProduct | null;
    sub: Subscription =  Subscription.EMPTY;

    constructor(private store: Store<any>,
                private productService: ProductService) {

    }

    ngOnInit(): void {
        this.sub.add(this.productService.selectedProductChanges$.subscribe(
            currentProduct => this.selectedProduct = currentProduct
        ));
        //
        this.productService.getProducts().subscribe({
            next: (products: IProduct[]) => this.products = products,
            error: err => this.errorMessage = err
        });
        //
        this.sub.add(this.store.select('products').subscribe((products) => {
            if (products) {
                this.displayCode = products.showProductCode;
            }
        }));
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    checkChanged(): void {
        // this.displayCode = !this.displayCode;
        this.store.dispatch(
            { type: '[Product] Toggle Product Code' }
        );
    }

    newProduct(): void {
        this.productService.changeSelectedProduct(this.productService.newProduct());
    }

    productSelected(product: IProduct): void {
        this.productService.changeSelectedProduct(product);
    }

}
