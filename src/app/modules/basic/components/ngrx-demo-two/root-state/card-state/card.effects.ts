import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
//
import {JokeService} from '@app/modules/basic/components/ngrx-demo-two/services/joke.service';
import {
    appComponentInitialized,
    LoadAllRequested,
    LoadCategoryRequested
} from '@app/modules/basic/components/ngrx-demo-two/root-state/ui.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {
    LoadAllFailed,
    LoadAllSucceeded,
    LoadCategoryFailed,
    LoadCategorySucceeded
} from '@app/modules/basic/components/ngrx-demo-two/root-state/api.action';
import {of} from 'rxjs';

@Injectable()
export class JokeStoreEffects {
    constructor(private actions$: Actions,
                private jokeService: JokeService) {
    }
    //
    loadAllJokes$ = createEffect(() => {
        // ofType, filter if one of the actions is dispatched
        return this.actions$.pipe(
            ofType(
                appComponentInitialized,
                LoadAllRequested
            ),
            mergeMap(() => {
                return this.jokeService.getJokes().pipe(
                    map((jokes) => {
                        return LoadAllSucceeded({ jokes: jokes })
                    }),
                    catchError((error) => of(LoadAllFailed({error: error.message})))
                )
            })
        )
    })

    // load Category
    loadCategoryJokes$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoadCategoryRequested),
            mergeMap((action) => {
                return this.jokeService.getJokesByCategory(action.category).pipe(
                    map(jokes => LoadCategorySucceeded({ jokes })),
                    catchError((error) => of(LoadCategoryFailed({ error: error.message })))
                )
            })
        )
    })

    // Show AlertOnFailure
    showAlertOnFailure$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoadAllFailed),
            tap(({error}) => {
                window.alert(error);
            })
        )
    }, {dispatch: false})
}
