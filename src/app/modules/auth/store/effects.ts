import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { loginDone, loginError, loginInitialized, registerDone, registerError, registerInitialized } from "./actions";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffect {
  constructor(private authService: AuthService, private actions$: Actions, private router: Router) {}

  registerUser = createEffect(() =>
    this.actions$.pipe(
      ofType(registerInitialized),
      switchMap((action) => {
        return this.authService.register(action.request).pipe(
          map(() => {
            this.router.navigateByUrl("/login");
            return registerDone();
          }),
          catchError(() => of(registerError({ error: "Something went wrong" })))
        );
      })
    )
  );

  loginUser = createEffect(() =>
    this.actions$.pipe(
      ofType(loginInitialized),
      switchMap((action) => {
        return this.authService.login(action.request).pipe(
          map((response) => {
            this.router.navigateByUrl("/portfolio");
            return loginDone({ response });
          }),
          catchError(() => of(loginError({ error: "Something went wrong" })))
        );
      })
    )
  );
}
