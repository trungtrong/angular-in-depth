import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable, ReplaySubject, of} from 'rxjs';
//
import { LoggedUserService } from './logged-user.service';
import { UserModel, AccessTokenResponse, LoginModel } from './../../models/shared';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../../shared/constants';
import { ApiService, API_ENDPOINT } from '../shared';
import { AppStorage } from './../../utilities';
import { randomLoggedUser, randomRefreshToken } from '../../data/auth';

@Injectable()
export class AuthenticationService {
  private isRefreshingToken = false;

  constructor(private router: Router,
              private jwtHelperService: JwtHelperService,
              private apiService: ApiService,
              private loggedUserService: LoggedUserService) {
  }

  get currentUser(): Observable<UserModel> {
    return this.loggedUserService.currentUser;
  }

  get loggedUser(): UserModel {
    return this.loggedUserService.loggedUser;
  }

  removeTokens() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    if (!this.apiService.accessToken) {
      return false;
    }

    if (this.jwtHelperService.isTokenExpired(this.apiService.accessToken)) {
      this.isRefreshingToken = false;

      this.refreshAccessToken().pipe().subscribe(() => {
        console.log('aaa');
      })
    }

    // Will be refresh token
    return true;
  }

  login(params: LoginModel): Observable<UserModel> {
    return of(randomLoggedUser());
    this.apiService.get('refesh').subscribe((data) => {

    })
  }

  setCurrentUser(user: UserModel) {
    this.loggedUserService.setLoggedUser(user);
    // TODO: Set other data (localStorage, Avatar, Permissions, etc)

    AppStorage.storeTokenData(ACCESS_TOKEN_KEY, user.accessToken);
    AppStorage.storeTokenData(REFRESH_TOKEN_KEY, user.refreshToken);
  }

  removeCurrentUser(navigateToLogin = true) {
    //
    this.loggedUserService.setLoggedUser(null);
    //
    this.removeTokens();
    // BroadCast ?

    //
    if (navigateToLogin) {
      this.apiService.navigateToLogin();
    }
  }

  logout() {
		this.apiService.get(`${API_ENDPOINT.Auth}/logout`).toPromise().then();
		//
		this.removeCurrentUser();
  }

  /**
   * Refresh Token
   */
  refreshAccessToken(): Observable<AccessTokenResponse> {
    const refreshToken = AppStorage.getTokenData(REFRESH_TOKEN_KEY);
    const refreshObservable = this.getRefreshToken();

    // emit last value to new subscribe
    const refreshSubject = new ReplaySubject<AccessTokenResponse>(1);

    if (!this.isRefreshingToken) {
      //
      refreshSubject.subscribe((tokens: AccessTokenResponse) => {
          AppStorage.storeTokenData(REFRESH_TOKEN_KEY, tokens.refreshToken);
          AppStorage.storeTokenData(ACCESS_TOKEN_KEY, tokens.accessToken);
        },
        (error) => {
          this.isRefreshingToken = false;
        }
      );

      // opposite Subject
      // Observable must use subscribe(), it will implement the execution
      refreshObservable.subscribe(refreshSubject);
      this.isRefreshingToken = true;
      //
      return refreshSubject;
    }
  }

  getRefreshToken(): Observable<AccessTokenResponse> {
    return of(randomRefreshToken());
  }
}
