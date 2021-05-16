import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {UserModel} from '@app/modules/basic/components/ngxs-authentication/models/user.model';
import {generateAccessToken} from '@app/data/auth';

@Injectable()
export class AuthService {
    isLogin(): boolean {
        return true;
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    logIn(email: string, password: string): Observable<any> {
        return of({
            token: generateAccessToken()
        });
        // return throwError({error: 'Error'});
    }

    signUp(email: string, password: string): Observable<UserModel> {
        return of(new UserModel({
            email: email,
            token: generateAccessToken()
        }))
    }
}
