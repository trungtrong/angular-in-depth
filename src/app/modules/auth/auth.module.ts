import {NgModule} from '@angular/core';

//
import {ThemeModule} from './../../theme';
//
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginFormComponent} from './../../modules/auth/login-form/login-form.component';
import { SharedModule } from './../../shared/shared.module';

const COMPONENTS = [
  AuthComponent,
  LoginFormComponent
];


@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginFormComponent,
      }
    ])
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class AuthModule {
}
