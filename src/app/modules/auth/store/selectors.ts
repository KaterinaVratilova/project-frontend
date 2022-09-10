import { createSelector } from "@ngrx/store";

import { AppState } from "../../../app.module";
import { AuthState } from "./reducer";

export const selectAuth = (state: AppState) => state.auth;

export const selectError = createSelector(selectAuth, (state: AuthState) => state.error);

export const selectLoading = createSelector(selectAuth, (state: AuthState) => state.loading);

export const selectUser = createSelector(selectAuth, (state: AuthState) => state.user);
