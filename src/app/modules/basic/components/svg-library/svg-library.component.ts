import {AfterViewChecked, Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-svg-library',
    templateUrl: './svg-library.component.html',
})
export class SvgLibraryComponent implements OnInit, AfterViewChecked {

    subscriptions: Subscription = new Subscription();

    constructor(private router: Router,) {
        this.subscriptions.add(this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd)
        ).subscribe(() => {
            console.log('svg-library route');
        }));
    }

    ngOnInit() {

    }

    ngAfterViewChecked() {
       // console.log('svg-icon');
    }
}
