import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {NgxsModule} from '@ngxs/store';
//
import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    NgxsAuthenticationComponent
} from '@app/modules/basic/components/ngxs-authentication';

const COMPONENTS = [
    NgxsAuthenticationComponent
];

const PROVIDERS = [
];
//
const routes: Routes = [
    {
        path: '',
        component: NgxsAuthenticationComponent,
    }
];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        //
        RouterModule.forChild(routes),
        NgxsModule.forFeature([
        ]),
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class NgxsAuthenticationModule {
}
