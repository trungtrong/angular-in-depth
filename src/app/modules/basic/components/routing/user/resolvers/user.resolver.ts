import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { MockUserDataService } from './mock-user-data.service';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {
    constructor(private userService: MockUserDataService) {}

    resolve(): Observable<any> {
        return this.userService.getUsers();
    }
}
