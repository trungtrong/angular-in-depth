import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-basic-example-two-text-box',
    templateUrl: 'example-text-box.component.html',
})

export class ExampleTextBoxComponent implements OnInit {
    private _name: string;

    @Input()
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
        this.nameChange.emit(value);
    }

    @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {

    }

    ngOnInit() {
        this.name = 'llalala';
    }

    onNameChanged(e: any) {
        console.log(this.name);
    }
}
