
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class SubscriptionConceptService {
    private _count: Subject<number> = new Subject<number>();

    constructor() { }

    get count(): Observable<number> {
        return this._count.asObservable();
    }

    setCount(count: number) {
        this._count.next(count);
    }
}
