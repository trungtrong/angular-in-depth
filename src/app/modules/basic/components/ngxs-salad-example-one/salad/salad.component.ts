import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
//
import {SaladState} from '@app/modules/basic/components/ngxs-salad-example-one/salad/state/salad.state';
import {StartOrder} from '@app/modules/basic/components/ngxs-salad-example-one/salad/state/salad.actions';
import {SaladSelectors} from '@app/modules/basic/components/ngxs-salad-example-one/salad/state/salad.selectors';

@Component({
    selector: 'app-salad',
    templateUrl: './salad.component.html',
    styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {
    @Select() salad$;
    @Select(SaladSelectors.getDressing) dressing$;
    @Select(state => state.salad.price) price$;

    constructor(private store: Store) {}

    ngOnInit() {}

    startOrder() {
        this.store.dispatch(new StartOrder());
    }
}
