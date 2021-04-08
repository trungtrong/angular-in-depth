import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-svg-example-one',
    templateUrl: './svg-example-one.component.html',
})
export class SvgExampleOneComponent implements OnInit, AfterViewChecked {


    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewChecked() {
        //console.log('sss');
    }
}
