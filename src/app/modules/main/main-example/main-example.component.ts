import {Component, OnInit} from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep'
import * as moment from 'moment';

class UserHahaModel {
    id: number;
}

@Component({
    selector: 'app-main-example',
    templateUrl: 'main-example.component.html',
    styleUrls: ['./main-example.component.scss'],
})

export class MainExampleComponent implements OnInit {
    user: UserHahaModel = new UserHahaModel();

    constructor() {

    }

    ngOnInit() {
        const userTwo: UserHahaModel = cloneDeep(this.user);
        const day = moment('20210711', 'YYYYMMDD').fromNow();
    }
}
