import {createAction, props} from '@ngrx/store';
import {Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';

export enum ContactsActionTypes {
    LOAD_ALL = '[Contacts] Load all',
    LOAD = '[Contacts] Load',
    CREATE = '[Contacts] Create',
    UPDATE = '[Contacts] Update',
    REMOVE = '[Contacts] Remove',
    //
    LOAD_ALL_SUCCESS = '[Contacts] Load all success',
    LOAD_SUCCESS = '[Contacts] Load success',
    CREATE_SUCCESS = '[Contacts] Create success',
    UPDATE_SUCCESS = '[Contacts] Update success',
    REMOVE_SUCCESS = '[Contacts] Remove success',
    FAILURE = '[Contacts] Failure',
}

export const loadAll = createAction(
    ContactsActionTypes.LOAD_ALL,
);

export const load = createAction(
    ContactsActionTypes.LOAD,
    props<{ id: number }>()
);

export const create = createAction(
    ContactsActionTypes.CREATE,
    props<{ contact: Contact }>()
);

export const update = createAction(
    ContactsActionTypes.UPDATE,
    props<{ contact: Contact }>()
);

export const remove = createAction(
    ContactsActionTypes.REMOVE,
    props<{ id: number }>()
);


export const loadAllSuccess = createAction(
    ContactsActionTypes.LOAD_ALL_SUCCESS,
    props<{ contacts: Contact[] }>()
);

export const loadSuccess = createAction(
    ContactsActionTypes.LOAD_SUCCESS,
    props<{ 'contact': Contact }>()
);

export const createSuccess = createAction(
    ContactsActionTypes.CREATE_SUCCESS,
    props<{ contact: Contact }>()
);

export const updateSuccess = createAction(
    ContactsActionTypes.UPDATE_SUCCESS,
    props<{ contact: Contact }>()
);


export const removeSuccess = createAction(
    ContactsActionTypes.REMOVE_SUCCESS,
    props<{ id: number }>()
);


export const failure = createAction(
    ContactsActionTypes.FAILURE,
    props<{ err: { concern: 'CREATE' | 'PATCH', error: any } }>()
);
