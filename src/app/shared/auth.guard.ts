import {Injectable} from '@angular/core';
import {
    CanActivate, Router, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {AuthenticationService} from './../services/auth';
import {ApiService} from './../services/shared';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private authService: AuthenticationService,
                private apiService: ApiService) {
    }

    private isLoggedIn(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        //
        this.authService.removeCurrentUser(false);
        this.apiService.navigateToLogin(true);
        return false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.isLoggedIn();
    }
}
