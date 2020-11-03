import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-basic-a-component',
    template: `
        <span>{{name}}</span>
        <app-basic-b-component [text]="text">
        </app-basic-b-component>
    `,
})

export class AComponent implements OnInit, AfterViewInit {
    name: string = 'I am A Component';
    text: string = 'A message for the child component';

    constructor(private cd: ChangeDetectorRef) {

    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.cd.detectChanges();
    }
}

/**
 * Refer to: https://trello.com/c/RSXYQJtz/6-change-dectectorref
 */
