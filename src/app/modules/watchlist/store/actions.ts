import { createAction, props } from "@ngrx/store";

import { Watchlist, WatchlistCreate } from "../services/watchlist.service";

export enum WATCHLIST_ACTION_TYPES {
  WATCHLIST_INITIALIZED = "WATCHLIST_INITIALIZED",
  WATCHLIST_DONE = "WATCHLIST_DONE",
  WATCHLIST_ERROR = "WATCHLIST_ERROR",

  WATCHLIST_CREATE_INITIALIZED = "WATCHLIST_CREATE_INITIALIZED",
  WATCHLIST_CREATE_DONE = "WATCHLIST_CREATE_DONE",
  WATCHLIST_CREATE_ERROR = "WATCHLIST_CREATE_ERROR",

  WATCHLIST_SET_SELECTED = "WATCHLIST_SET_SELECTED",
}

export const watchlistInitialized = createAction(
  WATCHLIST_ACTION_TYPES.WATCHLIST_INITIALIZED,
  props<{ userId: string }>()
);

export const watchlistDone = createAction(WATCHLIST_ACTION_TYPES.WATCHLIST_DONE, props<{ watchlists: Watchlist[] }>());

export const watchlistError = createAction(WATCHLIST_ACTION_TYPES.WATCHLIST_ERROR, props<{ error: string }>());

export const watchlistCreateInitialized = createAction(
  WATCHLIST_ACTION_TYPES.WATCHLIST_CREATE_INITIALIZED,
  props<WatchlistCreate>()
);

export const watchlistCreateDone = createAction(WATCHLIST_ACTION_TYPES.WATCHLIST_CREATE_DONE);

export const watchlistCreateError = createAction(
  WATCHLIST_ACTION_TYPES.WATCHLIST_CREATE_ERROR,
  props<{ error: string }>()
);

export const setSelectedWatchlist = createAction(
  WATCHLIST_ACTION_TYPES.WATCHLIST_SET_SELECTED,
  props<{ watchlist?: Watchlist }>()
);
