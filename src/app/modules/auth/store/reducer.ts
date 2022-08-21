import { createReducer, on } from "@ngrx/store";

import { registerDone, registerError, registerInitialized } from "./actions";

export type AuthState = {
  loading: boolean;
  error: string;
};

export const initialState: AuthState = {
  loading: false,
  error: "",
};

export const authReducer = createReducer(
  initialState,
  on(registerInitialized, (state) => ({ ...state, loading: true, error: "" })),
  on(registerDone, (state) => ({ ...state, loading: false, error: "" })),
  on(registerError, (state, { error }) => ({ ...state, loading: false, error }))
);
