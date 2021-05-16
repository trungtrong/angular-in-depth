import { Component, Input, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
import {AuthState, IAuthState} from '@app/modules/basic/components/ngxs-authentication/store/auth.state';
import {Logout} from '@app/modules/basic/components/ngxs-authentication/store/auth.actions';
//

@Component({
    selector: 'app-ngxs-authentication',
    templateUrl: './ngxs-authentication.component.html',
    styleUrls: ['./ngxs-authentication.component.scss']
})
export class NgxsAuthenticationComponent implements OnInit {
    user: UserModel = new UserModel();
    errorMessage: string;

    isAuthenticated: boolean = false;

    constructor(private store: Store) {
        this.store.select(AuthState).subscribe((state: IAuthState) => {
            this.user = state.user ?? new UserModel();
            this.errorMessage = state.errorMessage;
            this.isAuthenticated = state.isAuthenticated ?? false;
        })
    }

    ngOnInit() {
    }

    logOut() {
        this.store.dispatch(new Logout());
    }
}
