import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {SubscriptionConceptService} from '@app/modules/basic/components/observable-concept/services/subscription-concept.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-basic-subscription-concept',
    templateUrl: 'subscription-concept.component.html',
    styleUrls: ['./subscription-concept.component.scss'],
})

export class SubscriptionConceptComponent implements OnInit, OnDestroy {
    countA: number = 0;
    countB: number = 0;

    valueChanged$: Subject<number> = new Subject<number>();
    subscriptionA: Subscription = Subscription.EMPTY;
    subscriptionB: Subscription = Subscription.EMPTY;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private serviceA: SubscriptionConceptService) {
        this.subscriptionA = this.serviceA.count.subscribe((value) => {
            this.countA = value;
            console.log('countA: ', this.countA)
        });
        //
        this.subscriptionB = this.valueChanged$.subscribe((value) => {
            this.countB = value;
            console.log('countB: ', this.countB)
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            console.log(params);
        })
    }

    ngOnDestroy() {
    }

    increaseCountA() {
        this.serviceA.setCount(Math.round(Math.random() * 10));
    }

    increaseCountB() {
        this.valueChanged$.next(Math.round(Math.random() * 10));
    }

    backToPrevUrl() {
        this.router.navigateByUrl('/basic/pipes').then();
    }
}

class ValueModel {
    count: number;

    constructor(init?: Partial<ValueModel>) {
        Object.assign(this, init);
    }
}
