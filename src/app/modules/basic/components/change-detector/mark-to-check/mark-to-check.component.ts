import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {randomUserName} from '@app/data/auth';
import {UserModel} from '@app/modules/basic/components/change-detector/mark-to-check/mark-to-check.model';

@Component({
    selector: 'app-mark-to-check',
    templateUrl: 'mark-to-check.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MarkToCheckComponent implements OnInit, AfterViewChecked {
    user: UserModel = new UserModel();

    constructor(private cdr: ChangeDetectorRef) {

    }

    ngOnInit() {
        this.user = new UserModel({
            username: 'Trong Ngo',
            firstName: 'Trong',
            lastName: 'Ngo',
            age: 25
        })

    }

    ngAfterViewChecked() {
        console.log('MarkToCheckComponent View Checked');
        this.cdr.detectChanges();
    }

    updateName() {
        // Case 1:
        // don't change Reference
        // this.user.username = randomUserName();

        // Case 2:
        this.user = new UserModel({
            ...this.user,
            username: randomUserName()
        })
    }
}
