import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
//
import {Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import {
    createContact, destroyContact,
    getContactsIndex,
    showContact,
    updateContact
} from '@app/modules/basic/components/ngrx-nest-js-demo-three/services/contacts.mock';

@Injectable()
export class ContactsService {
    index(): Observable<Contact[]> {
        return getContactsIndex();
    }

    show(contactId: number): Observable<Contact> {
        return showContact(contactId);
    }

    create(contact: Contact): Observable<Contact> {
        return createContact(contact);
    }

    update(contact: Contact): Observable<Contact> {
        return updateContact(contact);
    }

    destroy(id: number): Observable<number> {
        return destroyContact(id);
    }
}
