import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-basic',
    templateUrl: 'basic.component.html',
    styleUrls: ['./basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BasicComponent implements OnInit, AfterViewChecked {
    intervalTime: any;

    constructor(private cdr: ChangeDetectorRef) {

    }

    ngOnInit() {
        // this.intervalTime = setInterval(() => {
        //     console.log('parent - interval');
        // }, 3000);

    }

    ngAfterViewChecked() {
        // console.log('parent - basic');
    }

    triggerParent(e) {
        this.cdr.markForCheck();
    }
}
