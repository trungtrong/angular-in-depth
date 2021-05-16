import {AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
//
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
import {Login} from '@app/modules/basic/components/ngxs-authentication/store/auth.actions';
import {AuthSelectors} from '@app/modules/basic/components/ngxs-authentication/store/auth.selectors';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-ngxs-authentication-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent implements OnInit {
    @Select(AuthSelectors.getErrorMessage) $errorMessage: Observable<string>;
    @Select(AuthSelectors.getUserEmail) $userEmail: Observable<string>;

    user: UserModel = new UserModel();

    constructor(private $store: Store) {
    }

    ngOnInit() {
    }

    onSubmit(): void {
        this.$store.dispatch(new Login(new UserModel({
            email: this.user.email,
            password: this.user.password
        })))
    }
}
