import { createAction, props } from "@ngrx/store";

import { Watchlist } from "../services/watchlist.service";

export enum WATCHLIST_ACTION_TYPES {
  WATCHLIST_INITIALIZED = "WATCHLIST_INITIALIZED",
  WATCHLIST_DONE = "WATCHLIST_DONE",
  WATCHLIST_ERROR = "WATCHLIST_ERROR",
}

export const watchlistInitialized = createAction(
  WATCHLIST_ACTION_TYPES.WATCHLIST_INITIALIZED,
  props<{ userId: string }>()
);

export const watchlistDone = createAction(WATCHLIST_ACTION_TYPES.WATCHLIST_DONE, props<{ watchlist: Watchlist[] }>());

export const watchlistError = createAction(WATCHLIST_ACTION_TYPES.WATCHLIST_ERROR, props<{ error: string }>());
