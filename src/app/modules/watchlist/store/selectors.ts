import { createSelector } from "@ngrx/store";

import { AppState } from "../../../app.module";
import { WatchlistState } from "./reducer";

export const selectWatchlist = (state: AppState) => state.watchlist;

export const selectWatchlistList = createSelector(selectWatchlist, (state: WatchlistState) => state.watchlist);
