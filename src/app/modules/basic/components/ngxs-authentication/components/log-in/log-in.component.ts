import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
//
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
import {Login} from '@app/modules/basic/components/ngxs-authentication/store/auth.actions';

@Component({
    selector: 'app-ngxs-authentication-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {


    user: UserModel = new UserModel();
    errorMessage: string;

    constructor(private $store: Store) {
    }

    ngOnInit() {
    }

    onSubmit(): void {
        this.$store.dispatch(new Login(new UserModel({
            email: this.user.email,
            password: this.user.password
        })))
    }
}
