import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-ngrx-nestjs-demo-three',
    templateUrl: './ngrx-nest-js-demo-three.component.html',
    styleUrls: ['./ngrx-nest-js-demo-three.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxNestJsDemoThreeComponent implements OnInit {
    currentPageTitle$: Observable<any>;

    constructor(private store: Store<any>) {}

    ngOnInit() {
    }
}
