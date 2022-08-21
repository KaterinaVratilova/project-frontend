import { createReducer, on } from "@ngrx/store";

import { loginDone, loginError, loginInitialized, registerDone, registerError, registerInitialized } from "./actions";
import { User } from "../services/auth.service";

export type AuthState = {
  loading: boolean;
  error: string;
  accessToken: string;
  user?: User;
};

export const initialState: AuthState = {
  loading: false,
  error: "",
  accessToken: "",
  user: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(registerInitialized, (state) => ({ ...state, loading: true, error: "" })),
  on(loginInitialized, (state) => ({ ...state, loading: true, error: "" })),

  on(registerDone, (state) => ({ ...state, loading: false, error: "" })),

  on(loginError, (state, { error }) => ({ ...state, loading: false, error })),
  on(registerError, (state, { error }) => ({ ...state, loading: false, error })),

  on(loginDone, (state, { response }) => ({ ...state, ...response }))
);
