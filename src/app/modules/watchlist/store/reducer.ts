import { createReducer, on } from "@ngrx/store";

import { Watchlist } from "../services/watchlist.service";
import {
  setSelectedWatchlist,
  watchlistCreateDone,
  watchlistCreateError,
  watchlistCreateInitialized,
  watchlistDone,
  watchlistError,
  watchlistInitialized,
} from "./actions";

export type WatchlistState = {
  watchlists: Watchlist[];
  watchlist?: Watchlist;
  loading: boolean;
};

export const watchlistInitialState: WatchlistState = {
  watchlists: [],
  watchlist: undefined,
  loading: true,
};

export const watchlistReducer = createReducer(
  watchlistInitialState,
  on(watchlistInitialized, (state) => ({ ...state, loading: true, error: "" })),

  on(watchlistDone, (state, { watchlists }) => ({ ...state, watchlists, loading: false, error: "" })),

  on(watchlistError, (state, { error }) => ({ ...state, loading: false, error })),

  on(watchlistCreateInitialized, (state) => ({ ...state, loading: true, error: "" })),

  on(watchlistCreateDone, (state) => ({ ...state, loading: false, error: "" })),

  on(watchlistCreateError, (state, { error }) => ({ ...state, loading: false, error })),

  on(setSelectedWatchlist, (state, { watchlist }) => ({ ...state, watchlist }))
);
