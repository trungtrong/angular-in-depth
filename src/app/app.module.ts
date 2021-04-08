import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor, JwtModule} from '@auth0/angular-jwt';
//
import {ThemeModule} from './theme';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {ACCESS_TOKEN_KEY, AUTH_SCHEME} from './shared/constants';
import {RefreshTokenInterceptor} from './services/shared/refresh-token.interceptor';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Step 1: set HTTP INTERCEPTOR
export function accessTokenGetter() {
    return localStorage.getItem(ACCESS_TOKEN_KEY) ? decodeURIComponent(
        atob(localStorage.getItem(ACCESS_TOKEN_KEY))
    ) : null;
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
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
    ],
    providers: [
        JwtInterceptor,
        {
            /**
             * https://medium.com/@swapnil.s.pakolu/angular-interceptors-multiple-interceptors-and-6-code-examples-of-interceptors-59e745b684ec
             */
            provide: HTTP_INTERCEPTORS,
            useClass: RefreshTokenInterceptor,
            multi: true // b/c 2 Interceptor use HTTP_Interceptor (refresh and jwtInterceptor (plug-in))
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
