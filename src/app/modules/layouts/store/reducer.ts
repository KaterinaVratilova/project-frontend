import { createReducer, on } from "@ngrx/store";

import { setHideLanguage } from "./actions";

export type LayoutsState = {
  hideLanguage: boolean;
};

export const layoutsInitialState: LayoutsState = {
  hideLanguage: false,
};

export const layoutsReducer = createReducer(
  layoutsInitialState,
  on(setHideLanguage, (state, { hide }) => ({ ...state, hideLanguage: hide }))
);
