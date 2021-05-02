import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
//
import {Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import {ContactsStoreFacade} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/contacts.store-facade';
import {ContactsEffects} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/effects/contacts.effect';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    contact$ = this.activatedRoute.params.pipe(
        map((params) => params.contactId),
        switchMap((id) => this.contactsFacade.getContactById(id))
    );

    redirectSub: Subscription = Subscription.EMPTY;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private contactsFacade: ContactsStoreFacade,
                private contactsEffects: ContactsEffects) {
    }

    ngOnInit() {
        // If the destroy effect fires, we check if the current id is the one being viewed
        // and redirect to index
        this.redirectSub = this.contactsEffects.destroy$.pipe(
            filter((action) => {
                return action.id === +this.activatedRoute.snapshot.params.contactId
            })
        ).subscribe((_) => {
            this.router.navigate(['/basic/ngrx-nest-js-demo-three/contacts']).then();
        })
    }

    ngOnDestroy() {
        this.redirectSub.unsubscribe();
    }

    editContact(contact: Contact) {
        this.router.navigate(['/basic/ngrx-nest-js-demo-three/contacts', contact.id, 'edit']).then();
    }

    deleteContact(contact: Contact) {
        const r = confirm('Are you sure?');
        if (r) {
            this.contactsFacade.deleteContact(contact.id);
        }
    }
}
