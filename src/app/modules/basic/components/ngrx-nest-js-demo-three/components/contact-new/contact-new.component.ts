import { ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import { Router} from '@angular/router';
import {ContactsStoreFacade} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/contacts.store-facade';

@Component({
    selector: 'app-contact-new',
    templateUrl: './contact-new.component.html',
    styleUrls: ['./contact-new.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactNewComponent implements OnInit, OnDestroy {

    constructor(private router: Router,
                private contactsFacade: ContactsStoreFacade) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    submitted(contact: Contact) {
        this.contactsFacade.createContact(contact);
        this.router.navigate(['/basic/ngrx-nest-js-demo-three/contacts']).then();
    }
}
