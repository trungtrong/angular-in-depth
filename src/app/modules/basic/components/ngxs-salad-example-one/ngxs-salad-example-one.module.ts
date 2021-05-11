import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
//
import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    NgxsSaladExampleOneComponent
} from '@app/modules/basic/components/ngxs-salad-example-one';
import {OrderService} from '@app/modules/basic/components/ngxs-salad-example-one/services/order.service';
import {NgxsModule} from '@ngxs/store';
import {SaladAppState} from '@app/modules/basic/components/ngxs-salad-example-one/state/salad-app.state';
import {SaladModule} from '@app/modules/basic/components/ngxs-salad-example-one/salad/salad.module';
//
const COMPONENTS = [
    NgxsSaladExampleOneComponent
];

const PROVIDERS = [
    OrderService
];
//
const routes: Routes = [
    {
        path: '',
        component: NgxsSaladExampleOneComponent,
    }
];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        SaladModule,
        //
        RouterModule.forChild(routes),
        // Config Store for FeatureModule
        NgxsModule.forFeature([
            SaladAppState
        ]),
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class NgxsSaladExampleOneModule {
}
