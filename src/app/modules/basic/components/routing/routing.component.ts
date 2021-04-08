import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, RouterEvent, UrlTree, PRIMARY_OUTLET, RouterState} from '@angular/router';
import { Subscription } from 'rxjs';
import {filter, pairwise, startWith, switchMap} from 'rxjs/operators';

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
        // 1-  execute expression after router is initialized
        /* this.subscriptions.add(this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd)
        ).subscribe((event) => {
            console.log(event);
        })); */

        // Distinguish between child route and parent route navigation
        this.subscriptions.add(this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd),
            pairwise(),
            filter((events: RouterEvent[]) => {
                return events[0].url === events[1].url
            }),
            startWith('Initial Call'),
        ).subscribe((event) => {
            // console.log(event);
        }));
    }

    ngOnInit() {
        this.viewPortController.setOffset([0, 50]);
        // get params from activated route
        // this.subscriptions.add();
        this.activatedRoute.params.subscribe((params) => {
            // console.log('1 ', params);
        })
        //
        this.subscriptions.add(this.activatedRoute.fragment.pipe(
        ).subscribe((data) => {
            // console.log(data);
            setTimeout(() => {
                this.viewPortController.scrollToPosition([0, 500]);
            }, 500)
        }));
        // Part 1
        // this.processUrl();
        // this.processRouterState();

        // Part 2
        // this.getNavigationCycle();
        //

        // Part 3
        console.log(this.router);
    }

    processUrl() {
        // Router URL tree
        const tree: UrlTree = this.router.parseUrl(this.router.url);
        console.log('tree', tree);
        //
        const fragment = tree.fragment;
        console.log('fragment', fragment);
        //
        const queryParams = tree.queryParams;
        console.log('queryParams', queryParams);
        //
        const primary = tree.root.children[PRIMARY_OUTLET];
        console.log('primary', primary);
        console.log('segment', primary.segments);
    }

    processRouterState() {
        const routerState: RouterState = this.router.routerState;
        console.log('routerState', routerState);
    }

    getNavigationCycle() {
        this.router.events.subscribe((event: RouterEvent) => {
            console.log(event);
        })
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
