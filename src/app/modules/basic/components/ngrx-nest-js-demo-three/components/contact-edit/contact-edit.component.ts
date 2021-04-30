import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEditComponent implements OnInit, OnDestroy {

    contact$: Observable<any>;
    redirectSub: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {

    }

    ngOnDestroy() {
    }

    submitted(contact: Contact) {
    }

}
