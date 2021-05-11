import { Component, Input, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
//
import {AddTopping} from '@app/modules/basic/components/ngxs-salad-example-one/salad/state/salad.actions';

@Component({
    selector: 'app-topping-list',
    templateUrl: './topping-list.component.html',
    styleUrls: ['./topping-list.component.scss']
})
export class ToppingListComponent implements OnInit {
    choices = [
        'Olives',
        'Tomatoes',
        'Croutons',
        'Pickles',
        'Shrimp',
        'Pepitas',
        'Carrots'
    ];

    @Select((state) => state.sald.toppings) toppings$;

    constructor(private store: Store) {}

    ngOnInit() {}

    add(name: string) {
        this.store.dispatch(new AddTopping(name));
    }
}
