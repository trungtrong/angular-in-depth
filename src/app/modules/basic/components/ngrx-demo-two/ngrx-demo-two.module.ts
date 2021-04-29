import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    NgrxDemoTwoComponent,
    CardItemComponent,
    CardListComponent
} from '@app/modules/basic/components/ngrx-demo-two';
import {EffectsModule} from '@ngrx/effects';
import {JokeStateModule} from '@app/modules/basic/components/ngrx-demo-two/root-state/card-state/card-state.module';
import {ProductsComponent} from '@app/modules/basic/components/ngRx-demo-one/products';

const COMPONENTS = [
    NgrxDemoTwoComponent,
    CardItemComponent,
    CardListComponent
];

const PROVIDERS = [

];
//
const routes: Routes = [
    {
        path: '',
        component: NgrxDemoTwoComponent,
    }
];
//

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        //
        RouterModule.forChild(routes),
        // Config Store for FeatureModule
        JokeStateModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class NgrxDemoTwoModule {
}
