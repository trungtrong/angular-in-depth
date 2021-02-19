import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-basic-change-detector',
    templateUrl: 'change-detector.component.html',
    styleUrls: ['./change-detector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChangeDetectorComponent implements OnInit, AfterViewChecked {
    property: string = 'Hello';
    intervalTime: any;

    constructor(private cdr: ChangeDetectorRef) {

    }

    ngOnInit() {
        this.property = 'Oh my god';

        // this.intervalTime = setInterval(() => {
        //     console.log('parent - interval');
        // }, 3000);
    }

    triggerParent(e) {
        this.cdr.detectChanges();
        // this.cdr.markForCheck();
    }

    // ngDoCheck() {
    //     console.log('do-check');
    // }

    ngAfterViewChecked() {
        // console.log('lala');
    }
}
