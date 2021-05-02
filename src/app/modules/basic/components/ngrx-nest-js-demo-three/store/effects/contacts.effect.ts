import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as ContactsAction from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/actions/contacts.action';
import {catchError, exhaustMap, map, pluck, startWith, switchMap} from 'rxjs/operators';
import {ContactsService} from '@app/modules/basic/components/ngrx-nest-js-demo-three/services/contacts.service';
import {of} from 'rxjs';
//

/**
 * Effects file is for isolating and managing side effects of the application in one place
 * Http requests, Sockets, Routing, LocalStorage, etc
 */

@Injectable()
export class ContactsEffects {
    constructor(private action$: Actions,
                private contactsService: ContactsService) {
    }

    loadAll$ = createEffect(() => this.action$.pipe(
        ofType(ContactsAction.loadAll),
        startWith(ContactsAction.loadAll()),
        // Hit the Contacts Index endpoint of our REST API
        // Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id
        // ' Contacts Reducers ' will take care of the rest
        switchMap(() => this.contactsService.index().pipe(
            map((contacts) => ContactsAction.loadAllSuccess({contacts}))
        ))
    ))

    load$ = createEffect(() => this.action$.pipe(
        ofType(ContactsAction.load),
        pluck('id'),
        switchMap((id) => this.contactsService.show(id).pipe(
            map((contact) => ContactsAction.loadSuccess({contact}))
        ))
    ))

    create$ = createEffect(() => this.action$.pipe(
        ofType(ContactsAction.create),
        pluck('contact'),
        switchMap((contact) => this.contactsService.create(contact).pipe(
            map((contact) => ContactsAction.createSuccess({contact})),
            catchError(err => {
                alert(err.message);
                return of(ContactsAction.failure({
                    err: { concern: 'CREATE', error: err }
                }))
            })
        ))
    ))

    update$ = createEffect(() => this.action$.pipe(
        ofType(ContactsAction.update),
        pluck('contact'),
        exhaustMap((contact) => this.contactsService.update(contact).pipe(
            // tslint:disable-next-line:no-shadowed-variable
            map((contact) => ContactsAction.updateSuccess({contact}))
        ))
    ))

    destroy$ = createEffect(() => this.action$.pipe(
        ofType(ContactsAction.remove),
        pluck('id'),
        switchMap((id) => this.contactsService.destroy(id).pipe(
            pluck('id'),
            // tslint:disable-next-line:no-shadowed-variable
            map((id: number) => ContactsAction.removeSuccess({id}))
        ))
    ))
}
