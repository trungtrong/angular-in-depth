import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-child-one-routing-id',
    templateUrl: 'child-one-routing-id.component.html',
})

export class ChildOneRoutingIdComponent implements OnInit, OnDestroy {
    constructor(private router: Router) {

    }

    ngOnInit() {
        console.log('id');
    }

    ngOnDestroy() {
    }

    refresh() {
        // This doesn't refresh component
        // this.router.navigate(['/basic/routing/11255']).then();

        // it works but, it will refresh parent routing
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/basic/routing/11255'])
        );
    }
}
