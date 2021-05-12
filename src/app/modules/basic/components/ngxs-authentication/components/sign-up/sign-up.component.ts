import { Component, OnInit } from '@angular/core';
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
//

@Component({
    selector: 'app-ngxs-authentication-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    user: UserModel = new UserModel();

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(): void {
        console.log(this.user);
    }
}
