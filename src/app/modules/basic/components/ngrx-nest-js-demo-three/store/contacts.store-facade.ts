import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
//
import * as ContactsReducer from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/reducers/contacts.reducer';
import * as ContactsSelector from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/selectors/contacts.selector';
import * as AppSelector from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/selectors/ui.selector';
import * as ContactsAction from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/actions/contacts.action';
import {Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';

@Injectable()
export class ContactsStoreFacade {
    contacts$ = this.store.select(ContactsSelector.getAllContacts)

    constructor(private store: Store<AppSelector.IAppState>) {
    }

    loadContact(id: number) {
        this.store.dispatch(ContactsAction.load({id}));
    }

    createContact(contact: Contact) {
        this.store.dispatch(ContactsAction.create({contact}))
    }

    updateContact(contact: Contact) {
        this.store.dispatch(ContactsAction.update({contact}));
    }

    deleteContact(id: number) {
        this.store.dispatch(ContactsAction.remove({id}));
    }

    getContactById(id: number) {
        return this.store.select(ContactsSelector.getContactById(id));
    }
}
