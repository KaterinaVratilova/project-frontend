import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { WatchlistService } from "../services/watchlist.service";
import { watchlistDone, watchlistError, watchlistInitialized } from "./actions";

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private watchlistService: WatchlistService) {}

  watchlist = createEffect(() =>
    this.actions$.pipe(
      ofType(watchlistInitialized),
      switchMap((action) => {
        return this.watchlistService.getAll(action.userId).pipe(
          map((watchlist) => {
            return watchlistDone({ watchlist });
          }),
          catchError(() => of(watchlistError({ error: "Something went wrong" })))
        );
      })
    )
  );
}
