import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    public isAuthorized(loggedIn: string): boolean {
        return loggedIn === '1';
    }
}
