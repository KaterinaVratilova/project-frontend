import { createReducer, on } from "@ngrx/store";

import { loginDone, loginError, loginInitialized, registerDone, registerError, registerInitialized } from "./actions";
import { User } from "../types";

const AUTH_STORE_KEY = "authStoreKey";

const initialState: AuthState = {
  loading: false,
  error: "",
  accessToken: "",
  user: undefined,
};

const currentAuthState = getAuthState();

function getAuthState() {
  const store = localStorage.getItem(AUTH_STORE_KEY);

  return store ? JSON.parse(store) : initialState;
}

function setAuthState(state: AuthState) {
  localStorage.setItem(AUTH_STORE_KEY, JSON.stringify(state));
}

export type AuthState = {
  loading: boolean;
  error: string;
  accessToken: string;
  user?: User;
};

export const authReducer = createReducer(
  currentAuthState,
  on(registerInitialized, (state) => {
    const newState = { ...state, loading: true, error: "" };
    setAuthState(newState);
    return newState;
  }),

  on(loginInitialized, (state) => {
    const newState = { ...state, loading: true, error: "" };
    setAuthState(newState);
    return newState;
  }),

  on(registerDone, (state) => {
    const newState = { ...state, loading: false, error: "" };
    setAuthState(newState);
    return newState;
  }),

  on(loginError, (state, { error }) => {
    const newState = { ...state, loading: false, error };
    setAuthState(newState);
    return newState;
  }),

  on(registerError, (state, { error }) => {
    const newState = { ...state, loading: false, error };
    setAuthState(newState);
    return newState;
  }),

  on(loginDone, (state, { response }) => {
    const newState = { ...state, ...response, loading: false, error: "" };
    setAuthState(newState);
    return newState;
  })
);
