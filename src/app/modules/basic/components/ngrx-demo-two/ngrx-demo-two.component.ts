import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAppComponentViewModel} from '@app/modules/basic/components/ngrx-demo-two/root-state/card-state/card.selectors';
import {
    appComponentInitialized,
    LoadAllRequested,
    LoadCategoryRequested
} from '@app/modules/basic/components/ngrx-demo-two/root-state/ui.actions';

@Component({
    selector: 'app-ngrx-demo-two',
    templateUrl: './ngrx-demo-two.component.html',
    styleUrls: ['./ngrx-demo-two.component.scss']
})
export class NgrxDemoTwoComponent implements OnInit {
    appComponentViewModel$ = this.store.select(selectAppComponentViewModel);

    constructor(private store: Store<{}>) { }

    ngOnInit() {
        this.store.dispatch(appComponentInitialized());
    }

    onLoadAllRequested() {
        this.store.dispatch(LoadAllRequested());
    }

    onLoadCategoryRequested(category: string) {
        this.store.dispatch(LoadCategoryRequested({ category }));
    }
}
