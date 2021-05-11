import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//
import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {SaladComponent, ToppingListComponent} from '@app/modules/basic/components/ngxs-salad-example-one';
import {NgxsModule} from '@ngxs/store';
import {SaladState} from '@app/modules/basic/components/ngxs-salad-example-one/salad/state/salad.state';
//
const COMPONENTS = [
    SaladComponent,
    ToppingListComponent
];

const routes: Routes = [
    {
        path: 'order',
        component: SaladComponent
    }
]

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        //
        RouterModule.forChild(routes),
        NgxsModule.forFeature([SaladState])
    ],
    exports: [
        SaladComponent
    ],
    declarations: [
        ...COMPONENTS
    ]
})
export class SaladModule {
}
