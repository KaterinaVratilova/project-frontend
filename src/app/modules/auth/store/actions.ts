import { createAction, props } from "@ngrx/store";

import { LoginRequest, RegisterRequest } from "../request";
import { LoginResponse } from "../response";

export enum AUTH_ACTION_TYPES {
  REGISTER_INITIALIZED = "AUTH/REGISTER_INITIALIZED",
  REGISTER_DONE = "AUTH/REGISTER_DONE",
  REGISTER_ERROR = "AUTH/REGISTER_ERROR",

  LOGIN_INITIALIZED = "LOGIN_INITIALIZED",
  LOGIN_DONE = "LOGIN_DONE",
  LOGIN_ERROR = "LOGIN_ERROR",
}

export const registerInitialized = createAction(
  AUTH_ACTION_TYPES.REGISTER_INITIALIZED,
  props<{ request: RegisterRequest }>()
);

export const registerError = createAction(AUTH_ACTION_TYPES.REGISTER_ERROR, props<{ error: string }>());

export const registerDone = createAction(AUTH_ACTION_TYPES.REGISTER_DONE);

export const loginInitialized = createAction(AUTH_ACTION_TYPES.LOGIN_INITIALIZED, props<{ request: LoginRequest }>());

export const loginError = createAction(AUTH_ACTION_TYPES.LOGIN_ERROR, props<{ error: string }>());

export const loginDone = createAction(AUTH_ACTION_TYPES.LOGIN_DONE, props<{ response: LoginResponse }>());
