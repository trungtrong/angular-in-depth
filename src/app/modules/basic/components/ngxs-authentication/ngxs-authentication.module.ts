import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxsModule} from '@ngxs/store';
//
import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    LogInComponent,
    NgxsAuthenticationComponent,
    SignUpComponent
} from '@app/modules/basic/components/ngxs-authentication';
//
import {AuthState} from '@app/modules/basic/components/ngxs-authentication/store/auth.state';

const COMPONENTS = [
    NgxsAuthenticationComponent,
    LogInComponent,
    SignUpComponent
];

const PROVIDERS = [
];
//
const routes: Routes = [
    {
        path: '',
        component: NgxsAuthenticationComponent,
        children: [
            {
                path: 'log-in',
                component: LogInComponent
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            },
            {
                path: '**',
                redirectTo: '/'
            },
        ]
    }
];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        //
        RouterModule.forChild(routes),
        NgxsModule.forFeature([
            AuthState
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
