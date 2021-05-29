import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationStart, NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import {CanDeactiveGuard} from '@app/services/guards/can-deactive.guard';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-router-form-edit',
    templateUrl: './form-edit.component.html',
    styleUrls: ['./form-edit.component.scss'],
})
export class FormEditComponent implements OnInit, OnDestroy {
    value: string;
    currentRouteUrl: string;

    isDataChanged: boolean = false;

    subscription: Subscription = new Subscription();

    constructor(private router: Router,
                private activeRoute: ActivatedRoute,
                private canDeactiveGuard: CanDeactiveGuard) {
    }

    ngOnInit() {
        this.currentRouteUrl = this.router.url;
        //
        this.subscription.add(this.router.events.pipe(
            filter((event: RouterEvent) => {
                console.log(event);
                return event instanceof NavigationStart || event instanceof ActivationStart;
            })
        ).subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.canDeactiveGuard.setPageFormChanged(this.isDataChanged);
                console.log(this.router.url); // /basic/routing/can-deactive
            }
            // don't need
            if (event instanceof ActivationStart) {
                // reset pageFormChanged = false
                if (this.canDeactiveGuard.isPageFormChanged) {
                    this.canDeactiveGuard.setPageFormChanged(false);
                }
                //
                console.log(this.router.url); // /basic/routing/users?login=1
            }
        }))
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onValueChanged(e) {
        this.isDataChanged = !!this.value;
    }
}
