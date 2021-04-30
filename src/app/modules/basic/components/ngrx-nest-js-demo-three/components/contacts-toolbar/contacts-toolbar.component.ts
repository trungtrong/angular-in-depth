import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-contacts-toolbar',
    templateUrl: './contacts-toolbar.component.html',
    styleUrls: ['./contacts-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsToolbarComponent implements OnInit {
    @Input() title;

    constructor() { }

    ngOnInit() {

    }

}
