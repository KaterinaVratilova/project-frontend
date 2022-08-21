import { createAction, props } from "@ngrx/store";

import { RegisterRequest } from "../services/auth.service";

export enum AUTH_ACTION_TYPES {
  REGISTER_INITIALIZED = "AUTH/REGISTER_INITIALIZED",
  REGISTER_DONE = "AUTH/REGISTER_DONE",
  REGISTER_ERROR = "AUTH/REGISTER_ERROR",
}

export const registerInitialized = createAction(
  AUTH_ACTION_TYPES.REGISTER_INITIALIZED,
  props<{ request: RegisterRequest }>()
);

export const registerError = createAction(AUTH_ACTION_TYPES.REGISTER_ERROR, props<{ error: string }>());

export const registerDone = createAction(AUTH_ACTION_TYPES.REGISTER_DONE);
