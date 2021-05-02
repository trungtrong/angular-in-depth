import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//
import { Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import {ContactsStoreFacade} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/contacts.store-facade';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-contacts-index',
    templateUrl: './contacts-index.component.html',
    styleUrls: ['./contacts-index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsIndexComponent implements OnInit {

    contacts$ = this.contactsFacade.contacts$;
    // contacts$: Observable<any>;

    constructor(private router: Router,
                private contactsFacade: ContactsStoreFacade) {
    }

    ngOnInit() {}

    editContact(contact: Contact) {
        this.router.navigate(['/basic/ngrx-nest-js-demo-three/contacts', contact.id, 'edit']).then();
    }

    showContact(contact: Contact) {
        this.router.navigate(['/basic/ngrx-nest-js-demo-three/contacts', contact.id]).then();
    }

    deleteContact(contact: Contact) {
        const isConfirmed: boolean = confirm('Are you sure?');
        //
        if (isConfirmed) {
            this.contactsFacade.deleteContact(contact.id);
        }
    }
}
