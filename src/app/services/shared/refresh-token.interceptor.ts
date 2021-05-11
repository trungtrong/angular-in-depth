import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {JwtHelperService, JwtInterceptor} from '@auth0/angular-jwt';
//
import {AppStorage} from '../../utilities';
import {ACCESS_TOKEN_KEY} from '../../shared/constants';
import {AuthenticationService} from '../auth/authentication.service';
import {ApiService} from './api.service';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService,
                private jwtService: JwtHelperService,
                private jwtInterceptor: JwtInterceptor,
                private apiService: ApiService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isLoggedIn() && !this.jwtInterceptor.isDisallowedRoute(req)) {
            return next.handle(req).pipe(catchError((error) => {
                const errorResponse = error as HttpErrorResponse;
                if (errorResponse.status === 401 || this.jwtService.isTokenExpired(AppStorage.getTokenData(ACCESS_TOKEN_KEY))) {
                    return this.authService.refreshAccessToken().pipe(
                        switchMap(() => {
                            const updatedRequest = req.clone({
                                setHeaders: {
                                    Authorization: this.apiService.headerAuthorizationKey
                                }
                            });

                            return this.jwtInterceptor.intercept(updatedRequest, next);
                        })
                    ).pipe(catchError((error) => {
                        this.authService.logout();
                        return throwError(error);
                    }))
                }

                return throwError(error);
            }));
        }
    }
}
