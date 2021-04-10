import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//
import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    ProductsComponent,
    ProductEditComponent,
    ProductListComponent
} from '@app/modules/basic/components/ngRx-demo-one/products';
import {StoreModule} from '@ngrx/store';
import {productReducer} from '@app/modules/basic/components/ngRx-demo-one/products/state/product.reducer';
//
const productRoutes: Routes = [
    {
        path: '',
        component: ProductsComponent,
    }
];
//
const COMPONENTS = [
    ProductsComponent,
    ProductEditComponent,
    ProductListComponent
]

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        RouterModule.forChild(productRoutes),
        // Config Store for FeatureModule
        StoreModule.forFeature('products', productReducer)
    ],
    declarations: [
        ...COMPONENTS
    ]
})
export class ProductModule {
}
