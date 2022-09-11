import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { WatchlistService } from "../services/watchlist.service";
import {
  watchlistCreateDone,
  watchlistCreateError,
  watchlistCreateInitialized,
  watchlistDone,
  watchlistError,
  watchlistInitialized,
} from "./actions";

@Injectable()
export class WatchlistEffect {
  constructor(private actions$: Actions, private watchlistService: WatchlistService) {}

  watchlist = createEffect(() =>
    this.actions$.pipe(
      ofType(watchlistInitialized),
      switchMap((action) => {
        return this.watchlistService.getAll(action.userId).pipe(
          map((watchlists) => {
            return watchlistDone({ watchlists });
          }),
          catchError(() => of(watchlistError({ error: "Something went wrong" })))
        );
      })
    )
  );

  watchlistCreate = createEffect(() =>
    this.actions$.pipe(
      ofType(watchlistCreateInitialized),
      switchMap((action) => {
        return this.watchlistService.create({ userId: action.userId, label: action.label }).pipe(
          switchMap(() => {
            return [watchlistCreateDone(), watchlistInitialized({ userId: action.userId })];
          }),
          catchError(() => of(watchlistCreateError({ error: "Something went wrong" })))
        );
      })
    )
  );
}
