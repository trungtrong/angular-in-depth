import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Component({
    selector: 'app-basic-observable-concept',
    templateUrl: 'observable-concept.component.html',
    styleUrls: ['./observable-concept.component.scss'],
})

export class ObservableConceptComponent implements OnInit, OnDestroy {

    showSubscriptionComponent: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    toggleSubscriptionComponent() {
        this.showSubscriptionComponent = !this.showSubscriptionComponent;
    }
}
