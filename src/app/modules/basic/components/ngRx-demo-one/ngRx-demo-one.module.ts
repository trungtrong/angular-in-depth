import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import {NgRxDemoOneComponent} from '@app/modules/basic/components/ngRx-demo-one/ngRx-demo-one.component';
import {MenuComponent} from '@app/modules/basic/components/ngRx-demo-one/menu/menu.component';
import {WelcomeComponent} from '@app/modules/basic/components/ngRx-demo-one/welcome/welcome.component';
import {ProductModule} from '@app/modules/basic/components/ngRx-demo-one/products/products.module';
//

const COMPONENTS = [
    NgRxDemoOneComponent,
    MenuComponent,
    WelcomeComponent
];

const PROVIDERS = [

];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: NgRxDemoOneComponent,
                children: [
                    // {
                    //     path: 'welcome',
                    //     component: WelcomeComponent,
                    // },
                    // {
                    //     path: 'products',
                    //     loadChildren: () => import('./products/products.module').then(m => m.ProductModule)
                    // }
                ]
            },
        ]),
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class NgRxDemoOneModule {
}
