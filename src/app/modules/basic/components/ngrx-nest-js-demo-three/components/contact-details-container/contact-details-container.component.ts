import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
//
import {Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';

@Component({
    selector: 'app-contact-details-container',
    templateUrl: './contact-details-container.component.html',
    styleUrls: ['./contact-details-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsContainerComponent implements OnInit, OnDestroy {
    @Input() contact: Contact;

    @Output() edit = new EventEmitter<Contact>();
    @Output() remove = new EventEmitter<Contact>();

    constructor() {}

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
