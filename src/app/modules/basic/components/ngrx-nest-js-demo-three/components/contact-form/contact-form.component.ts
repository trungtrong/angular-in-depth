import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit, OnChanges {

    @Input() contact: Contact = {
        id: undefined,
        name: '',
        email: '',
        phone: ''
    };

    @Output() save = new EventEmitter<Contact>();

    form: FormGroup;

    constructor(public formBuilder: FormBuilder) {
    }

    ngOnInit() {

    }

    ngOnChanges() {
    }

    submit() {
    }
}
