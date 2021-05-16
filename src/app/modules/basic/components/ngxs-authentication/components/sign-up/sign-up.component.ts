import { Component, OnInit } from '@angular/core';
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
import {Select, Store} from '@ngxs/store';
import {SignUp} from '@app/modules/basic/components/ngxs-authentication/store/auth.actions';
import {AuthSelectors} from '@app/modules/basic/components/ngxs-authentication/store/auth.selectors';
import {Observable} from 'rxjs';
//

@Component({
    selector: 'app-ngxs-authentication-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    @Select(AuthSelectors.getErrorMessage) $errorMessage: Observable<string>;

    user: UserModel = new UserModel();

    constructor(private $store: Store) {
    }

    ngOnInit() {
    }

    onSubmit(): void {
        this.$store.dispatch(new SignUp(new UserModel({
            email: this.user.email,
            password: this.user.password
        })))
    }
}
