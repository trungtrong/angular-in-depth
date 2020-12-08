import { NgModule, ModuleWithProviders } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
//
import { ThemeModule } from './../theme';
import { AuthenticationService, LoggedUserService } from './../services/auth';
import { AuthGuard } from './auth.guard';
import { ApiService, AlertService } from './../services/shared';

const PROVIDERS = [
  AuthenticationService,
  ApiService,
  LoggedUserService,
  AuthGuard,
  AlertService
];

const COMPONENTS = [

];

@NgModule({
    imports: [
        ThemeModule,
        QuicklinkModule
    ],
    exports: [
        QuicklinkModule,
        ...COMPONENTS
    ],
    declarations: [...COMPONENTS],
})
/**
 * https://angular.io/guide/migration-module-with-providers
 * https://medium.com/slackernoon/when-to-use-angulars-forroot-method-400094a0ebb7
 * This type represents an NgModule along with additional providers
 * => Now theses services is shared between eagerly loaded modules and lazy loaded modules.
 * => this data is shared between routing
 * Ex: If one route is signed in => other route is signed in as well
 *
 *
 * 2/ Then finally, in any feature module (HomeModule, etc)
 *  we can simply import the shared module without the forRoot and we’ll have access to the
 *  shared pipes and directives without providing the service again
 */
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...PROVIDERS]
    };
  }
}
