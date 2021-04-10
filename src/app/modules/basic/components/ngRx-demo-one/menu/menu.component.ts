import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthenticationService, LoggedUserService} from '@app/services/auth';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    pageTitle = 'Acme Product Management';

    get isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    get userName(): string {
        if (this.authService.currentUser) {
            // return this.loggedUser.loggedUser.fullName;
            return 'Trong Ngo';
        }
        return '';
    }

    constructor(private router: Router,
                private authService: AuthenticationService,
                private loggedUser: LoggedUserService) { }

    ngOnInit() {
    }

    logOut(): void {
        this.authService.logout();
        this.router.navigate(['/welcome']).then();
    }
}
