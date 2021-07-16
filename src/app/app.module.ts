import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
//
import {ThemeModule} from './theme';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {RefreshTokenInterceptor} from './services/shared/refresh-token.interceptor';
import {JwtInterceptor, JwtModule} from '@auth0/angular-jwt';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
//
import {ACCESS_TOKEN_KEY, AUTH_SCHEME} from './shared/constants';
import {ProductData} from '@app/modules/basic/components/ngRx-demo-one/products/services/product.data';
//
import {AppComponent} from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environment';
import { EffectsModule } from '@ngrx/effects';
// NgRx Example 3
import {ROOT_REDUCERS} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/selectors/ui.selector';
import {NgxsModule} from '@ngxs/store';
import {SaladAppState} from '@app/modules/basic/components/ngxs-salad-example-one/state/salad-app.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpErrorInterceptor} from '@app/services/shared/error.interceptor';
import {ClientErrorHandler} from '@app/services/shared/client-error.handler';
import {CanDeactiveGuard} from '@app/services/guards/can-deactive.guard';
import {API_ENDPOINT} from '@app/services/shared';

// Step 1: set HTTP INTERCEPTOR
export function accessTokenGetter() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
        ? decodeURIComponent(atob(localStorage.getItem(ACCESS_TOKEN_KEY))) : null;
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        // HttpClientInMemoryWebApiModule.forRoot(ProductData), // run Memory Data
        BrowserAnimationsModule,
        //
        JwtModule.forRoot({
            config: {
                tokenGetter: accessTokenGetter,
                authScheme: AUTH_SCHEME,
                disallowedRoutes: [
                    new RegExp('\/assets\/.*')
                ]
            }
        }),
        //
        AppRoutingModule,
        ThemeModule,
        SharedModule.forRoot(),
        // https://ngrx.io/guide/store/install
        // ng add @ngrx/store@latest
        // Example 1,2
        // StoreModule.forRoot({}),
        //
        // Example 3: Initialize the central store with app's main reducer
        // StoreModule.forRoot(ROOT_REDUCERS),
        /* StoreDevtoolsModule.instrument({
            name: 'Angular In Depth',
            // maximum allowed actions to be stored in the history tree,
            // 0 is infinite
            // default = 25 for performance reasons
            maxAge: 25,
            logOnly: environment.production
        }),*/
        // start monitoring app's side effects
        // EffectsModule.forRoot([]),
        NgxsModule.forRoot([], {
            developmentMode: !environment.production,
            selectorOptions: { injectContainerState: false }
        }),
        NgxsReduxDevtoolsPluginModule.forRoot({
            disabled: environment.production
        }),
        NgxsLoggerPluginModule.forRoot({
            disabled: environment.production
        })
    ],
    providers: [
        CanDeactiveGuard,
        JwtInterceptor,
        {
            /**
             // tslint:disable-next-line:max-line-length
             * https://medium.com/@swapnil.s.pakolu/angular-interceptors-multiple-interceptors-and-6-code-examples-of-interceptors-59e745b684ec
             */
            provide: HTTP_INTERCEPTORS,
            useClass: RefreshTokenInterceptor,
            multi: true // b/c 2 Interceptor use HTTP_Interceptor (refresh and jwtInterceptor (plug-in))
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
        {
            provide: ErrorHandler,
            useClass: ClientErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
