import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-contacts-index',
    templateUrl: './contacts-index.component.html',
    styleUrls: ['./contacts-toolbar-index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsIndexComponent implements OnInit {

    contacts$: Observable<any>;

    constructor(private router: Router) { }

    ngOnInit() {}

    editContact(contact: Contact) {
        this.router.navigate(['/contacts-toolbar', contact.id, 'edit']);
    }

    showContact(contact: Contact) {
        this.router.navigate(['/contacts-toolbar', contact.id]);
    }

    deleteContact(contact: Contact) {
    }
}
