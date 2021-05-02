import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import {ContactsEffects} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/effects/contacts.effect';
import {filter, map, switchMap} from 'rxjs/operators';
import {ContactsStoreFacade} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/contacts.store-facade';


@Component({
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEditComponent implements OnInit, OnDestroy {

    contact$  = this.activatedRoute.params.pipe(
        map( params => params.contactId),
        switchMap(id => this.contactsFacade.getContactById(id))
    );
    redirectSub: Subscription;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private contactsEffects: ContactsEffects,
                private contactsFacade: ContactsStoreFacade) {
    }

    ngOnInit() {
        // listen to update$ side effect, after updating redirect to the contact details view
        this.redirectSub = this.contactsEffects.update$.pipe(
            // make sure that the currently edited contact has been updated and not some other contact
            // emitted by sockets
            filter((action) => {
                return action.contact.id === +this.activatedRoute.snapshot.params.contactId
            })
        ).subscribe((action) => {
            this.router.navigate(['/basic/ngrx-nest-js-demo-three/contacts', action.contact.id]).then();
        })
        //
        this.activatedRoute.params.subscribe((params) => {
            // update our id from the backend in case it was modified by another client
            this.contactsFacade.loadContact(+params.contactId);
        })
    }

    ngOnDestroy() {
        this.redirectSub.unsubscribe();
    }

    submitted(contact: Contact) {
        this.contactsFacade.updateContact(contact);
    }
}
