import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
//
import { IJoke, IJokeResult} from '@app/modules/basic/components/ngrx-demo-two/models/card.model';
import {ApiService} from '@app/services/shared';

@Injectable({
    providedIn: 'root'
})
export class JokeService {
    private API_BASE_URL = 'https://api.icndb.com';

    get headers(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'q=0.8;application/json;q=0.9',
        });
    }

    get options() {
        return {headers: this.headers};
    }

    constructor(private httpClient: HttpClient,
                private apiService: ApiService) {}

    // getJokes(): Observable<IJoke[]> {
    //     return this.httpClient.get<IJokeResult>(`${this.API_BASE_URL}/jokes/random/5?escape=javascript`)
    //         .pipe(map((result) => result.value));
    // }
    //
    // getJokesByCategory(category: string): Observable<IJoke[]> {
    //     return this.httpClient.get<IJokeResult>(`${this.API_BASE_URL}/jokes/random/5?escape=javascript&limitTo=[${category}]`)
    //         .pipe(map((result) => result.value));
    // }

    getJokes(): Observable<IJoke[] | any> {
        return this.httpClient
            .get<IJokeResult>(`${this.API_BASE_URL}/jokes/random/5?escape=javascript`)
            .pipe(map(result => result.value));
    }

        getJokesByCategory(category: string): Observable<IJoke[]> {
        return this.httpClient
            .get<IJokeResult>(
                `${this.API_BASE_URL}/jokes/random/5?escape=javascript&limitTo=[${category}]`
            )
            .pipe(map(result => result.value));
    }
}
