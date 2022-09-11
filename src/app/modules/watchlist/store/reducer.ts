import { createReducer, on } from "@ngrx/store";

import { Watchlist } from "../services/watchlist.service";
import {
  watchlistCreateDone,
  watchlistCreateError,
  watchlistCreateInitialized,
  watchlistDone,
  watchlistError,
  watchlistInitialized,
} from "./actions";

export type WatchlistState = {
  watchlist: Watchlist[];
  loading: boolean;
};

export const watchlistInitialState: WatchlistState = {
  watchlist: [],
  loading: true,
};

export const watchlistReducer = createReducer(
  watchlistInitialState,
  on(watchlistInitialized, (state) => ({ ...state, loading: true, error: "" })),

  on(watchlistDone, (state) => ({ ...state, loading: false, error: "" })),

  on(watchlistError, (state, { error }) => ({ ...state, loading: false, error })),

  on(watchlistCreateInitialized, (state) => ({ ...state, loading: true, error: "" })),

  on(watchlistCreateDone, (state) => ({ ...state, loading: false, error: "" })),

  on(watchlistCreateError, (state, { error }) => ({ ...state, loading: false, error }))
);
