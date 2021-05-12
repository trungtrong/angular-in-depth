import { Component, OnInit } from '@angular/core';
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
//

@Component({
    selector: 'app-ngxs-authentication-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
    user: UserModel = new UserModel();

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(): void {
        console.log(this.user);
    }
}
