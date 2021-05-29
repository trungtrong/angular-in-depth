import { Component, OnInit } from '@angular/core';
import {CanDeactiveGuard, CheckDeactivate} from '@app/services/guards/can-deactive.guard';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppNotify} from '@app/utilities';

@Component({
    selector: 'app-can-deactive-without-guard',
    templateUrl: './can-deactive-without-guard.component.html',
    styleUrls: ['./can-deactive-without-guard.component.scss'],
})
export class CanDeactiveWithoutGuardComponent implements OnInit, CheckDeactivate{
    constructor(private canDeactiveGuard: CanDeactiveGuard) {
    }

    ngOnInit() {
        // set the default value
        this.canDeactiveGuard.setPageFormChanged(false);
    }

    canDeactivate(
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isDataChanged: boolean = this.canDeactiveGuard.isPageFormChanged;
        if (isDataChanged) {
            AppNotify.warning('Are you sure to discard changes');
            return false;
        } else {
            return true;
        }
    }
}
