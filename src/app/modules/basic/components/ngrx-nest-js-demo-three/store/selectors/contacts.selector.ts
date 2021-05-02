import {Action, combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';
//
import * as ContactsReducer from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/reducers/contacts.reducer';

export interface IContactsState {
    contacts: ContactsReducer.IContactState;
}

// Provide reducers with AoT-compilation compliance (tuan thu rule)
// https://netbasal.com/implementing-a-meta-reducer-in-ngrx-store-4379d7e1020a
export function reducers(state: IContactsState | undefined, action: Action) {
    return combineReducers({
        contacts: ContactsReducer.reducer
    })(state, action)
}

/**
 * The createFeatureSelector function selects a piece of state from the ROOT of STATE object
 * This is used for selecting feature states that are loaded eagerly or lazily
 */
export const ContactsFeatureKey = 'contacts';

export const getContactsState = createFeatureSelector<IContactsState>(ContactsFeatureKey);

export const getContactsEntitiesState = createSelector(
    getContactsState,
    (state) => state.contacts
)

// selectAll is a property of EntitySelectors
export const {
    selectAll: getAllContacts,
} = ContactsReducer.contactsAdapter.getSelectors(getContactsEntitiesState);

export const getContactById = (id: number) => createSelector(
    getContactsEntitiesState,
    ContactsReducer.getContactById(id)
)
