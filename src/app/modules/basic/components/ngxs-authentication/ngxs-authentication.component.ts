import { Component, Input, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
//

@Component({
    selector: 'app-ngxs-authentication',
    templateUrl: './ngxs-authentication.component.html',
    styleUrls: ['./ngxs-authentication.component.scss']
})
export class NgxsAuthenticationComponent implements OnInit {

    constructor(private store: Store) {
    }

    ngOnInit() {
    }
}
