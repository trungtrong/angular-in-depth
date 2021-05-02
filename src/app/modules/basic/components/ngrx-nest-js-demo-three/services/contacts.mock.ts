import {Observable, of} from 'rxjs';
import * as faker from 'faker';
//
import {Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';

export function getContacts(count = 5): Contact[] {
    return Array(count).fill({}).map((item, index) => {
        return new Contact({
            id: index,
            name: faker.name.findName(),
            email: faker.name.findName() + '@gmail.com'
        })
    })
}

export function getContactsIndex(): Observable<Contact[]> {
    return of(getContacts())
}

export function showContact(contactId: number): Observable<Contact> {
    return of({
        id: 1,
        name: 'john',
        email: 'john@gmail.com'
    });
}

export function createContact(contact: Contact): Observable<Contact> {
    return of({
        id: 4,
        name: 'john doe',
        email: 'john@gmail.com'
    });
}

export function updateContact(contact: Contact): Observable<Contact> {
    return of(contact);
}

export function destroyContact(id: number): Observable<number> {
    return of(1);
}

