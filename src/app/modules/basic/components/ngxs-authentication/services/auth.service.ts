import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
import {generateAccessToken} from '@app/data/auth';

@Injectable()
export class AuthService {
    getToken(): string {
        return localStorage.getItem('token');
    }

    logIn(email: string, password: string): Observable<any> {
        return of(true);
    }

    signUp(email: string, password: string): Observable<UserModel> {
        return of(new UserModel({
            email: email,
            password: password,
            token: generateAccessToken()
        }))
    }
}
