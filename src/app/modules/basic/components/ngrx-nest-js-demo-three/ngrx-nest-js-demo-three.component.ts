import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
//
import * as AppSelector from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/selectors/ui.selector';

@Component({
    selector: 'app-ngrx-nestjs-demo-three',
    templateUrl: './ngrx-nest-js-demo-three.component.html',
    styleUrls: ['./ngrx-nest-js-demo-three.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxNestJsDemoThreeComponent implements OnInit {
    currentPageTitle$ = this.store.select(AppSelector.getCurrentTitle);

    constructor(private store: Store<any>) {}

    ngOnInit() {
    }
}
