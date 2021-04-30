import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
//
import { Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    contact$: Observable<any>;
    redirectSub: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
    }

    ngOnDestroy() {
        this.redirectSub.unsubscribe();
    }

    editContact(contact: Contact) {
    }

    deleteContact(contact: Contact) {
    }
}
