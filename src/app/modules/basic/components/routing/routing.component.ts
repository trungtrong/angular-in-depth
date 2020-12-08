import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-basic-routing',
    templateUrl: 'routing.component.html',
    styleUrls: ['./routing.component.scss'],
})

export class BasicRoutingComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private viewPortController: ViewportScroller) {

    }

    ngOnInit() {
        this.viewPortController.setOffset([0, 50]);
        // To config => config whole app
        // this.router.onSameUrlNavigation = 'reload';

        this.subscriptions.add(this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd)
        ).subscribe(() => {
            console.log('llala');
        }));
        //
        //
        this.subscriptions.add(this.activatedRoute.fragment.pipe(
        ).subscribe((data) => {
            console.log(data);
            setTimeout(() => {
                this.viewPortController.scrollToPosition([0, 500]);
            }, 500)
        }));
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
