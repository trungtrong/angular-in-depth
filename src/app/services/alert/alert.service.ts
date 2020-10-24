import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable, of } from 'rxjs';
import { randomAlerts } from './../../data/alert.mock';
//
import { AlertModel } from '@app/models/shared';

@Injectable()
export class AlertService {
    constructor() { }

    getAlerts(): Observable<AlertModel[]> {
        if (environment.debug) {
            console.log('API: getAlerts');
        }

        return of(randomAlerts());
    }
}
