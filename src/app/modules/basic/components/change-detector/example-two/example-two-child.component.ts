import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit} from '@angular/core';

// https://indepth.dev/everything-you-need-to-know-about-change-detection-in-angular/

@Component({
    selector: 'app-basic-example-two-child',
    templateUrl: 'example-two-child.component.html',
})

export class ExampleTwoChildComponent implements OnInit, DoCheck, AfterViewInit {
    currentName: string;
    nameLength: number = 0;

    constructor(public cd: ChangeDetectorRef) {
        this.cd.detach();
    }

    ngOnInit() {
        this.currentName = 'd';
    }

    ngDoCheck() {
        // if (this.currentName.length !== this.nameLength) {
        //     this.cd.markForCheck();
        //     //
        //     this.nameLength = this.currentName.length;
        // }
    }

    nameChanged(e) {
        console.log(e);
    }

    ngAfterViewInit() {
        // 2 - detectChanges();
        this.cd.detectChanges();
    }


}


/*
1 -     constructor(public cd: ChangeDetectorRef) {
        setTimeout(() => {
            this.cd.detach();
        }, 2000);

        ==>  Detaches this view from the change-detection tree
        ==> Không cho render it's view and it's children view
        => Component = empty
**/

/**
 2 -     ngAfterViewInit() {
        this.cd.detectChanges();
    }
 *
 */
