import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree} from '@angular/router';

import { AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class CanActivateGuard implements CanActivate, CanActivateChild {

    constructor(private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let isLoggedIn = route.queryParams.login || 0;
        return this.auth.isAuthorized(isLoggedIn);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }
}
