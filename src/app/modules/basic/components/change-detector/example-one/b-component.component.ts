import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AComponent} from '@app/modules/basic/components/change-detector/example-one/a-component.component';
// import { AppComponent } from 'app/app.component';

@Component({
    selector: 'app-basic-b-component',
    template: `
        <span>{{text}}</span>
    `,
})

export class BComponent implements OnInit, AfterViewInit {
    @Input() text: string = '';

    constructor(private aParent: AComponent) {

    }

    ngOnInit() {
        this.aParent.text = 'updated text';
    }

    ngAfterViewInit() {
        // this.aParent.name = 'updated name';
    }


}
