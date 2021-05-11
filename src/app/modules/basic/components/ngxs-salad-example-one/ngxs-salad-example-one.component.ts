import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
//
import {ISaladAppState, SaladAppState} from '@app/modules/basic/components/ngxs-salad-example-one/state/salad-app.state';
import {ConfirmOrder, SetUserName} from '@app/modules/basic/components/ngxs-salad-example-one/state/salad-app.actions';

@Component({
    selector: 'app-ngxs-salad-example-one',
    templateUrl: './ngxs-salad-example-one.component.html',
    styleUrls: ['./ngxs-salad-example-one.component.scss']
})
export class NgxsSaladExampleOneComponent implements OnInit {
    state$: Observable<ISaladAppState>;

    constructor(private store: Store) {
        this.state$ = this.store.select((state) => state);
    }

    ngOnInit() {
    }

    clickHandler(username) {
        console.log(username);
        this.store.dispatch([
            new SetUserName(username),
        ]);
    }

    confirm() {
        this.store.dispatch(ConfirmOrder);
    }
}
