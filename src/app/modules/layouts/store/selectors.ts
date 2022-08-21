import { createSelector } from "@ngrx/store";

import { AppState } from "../../../app.module";

export const selectLayouts = (state: AppState) => state.layouts;

export const selectHideLanguage = createSelector(selectLayouts, (state) => state.hideLanguage);
