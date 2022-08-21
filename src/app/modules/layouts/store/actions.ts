import { createAction, props } from "@ngrx/store";

export const setHideLanguage = createAction("[Layouts store] Set hide language", props<{ hide: boolean }>());
