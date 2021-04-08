import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {UserModel} from '@app/modules/basic/components/change-detector/mark-to-check/mark-to-check.model';

@Component({
    selector: 'app-mark-to-check-child-one',
    templateUrl: 'mark-to-check-child-one.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MarkToCheckChildOneComponent implements OnInit, AfterViewChecked {
    @Input() user: UserModel = new UserModel();

    constructor(private cdr: ChangeDetectorRef) {

    }

    ngOnInit() {
    }

    ngAfterViewChecked() {
       // console.log('MarkToCheckChildOneComponent View Checked');
    }
}
