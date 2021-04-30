import { ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { Contact} from '@app/modules/basic/components/ngrx-nest-js-demo-three/models/contact.model';
import { Router} from '@angular/router';

@Component({
    selector: 'app-contact-new',
    templateUrl: './contact-new.component.html',
    styleUrls: ['./contact-new.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactNewComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    submitted(contact: Contact) {
    }

}
