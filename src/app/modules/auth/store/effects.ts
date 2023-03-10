import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Router } from "@angular/router";

import { loginDone, loginError, loginInitialized, registerDone, registerError, registerInitialized } from "./actions";
import { LoginService } from "../services/login.service";
import { RegisterService } from "../services/register.service";
import { JwtTokenService } from "../services/jwt-token.service";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private loginService: LoginService,
    private registerService: RegisterService,
    private jwtTokenService: JwtTokenService
  ) {}

  registerUser = createEffect(() =>
    this.actions$.pipe(
      ofType(registerInitialized),
      switchMap((action) => {
        return this.registerService.register(action.request).pipe(
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
        return this.loginService.login(action.request).pipe(
          map((response) => {
            this.jwtTokenService.set(response.jwtToken);
            this.router.navigateByUrl("/portfolio");

            return loginDone({ response });
          }),
          catchError((response: HttpErrorResponse) => {
            if (response.error?.code === "BAD_CREDENTIALS") {
              return of(loginError({ error: response.error.code }));
            }

            return of(loginError({ error: "Something went wrong" }));
          })
        );
      })
    )
  );
}
