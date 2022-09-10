import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { JwtTokenService } from "../../auth/services/jwt-token.service";

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private jwtTokenService: JwtTokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.jwtTokenService.get();

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token),
      });

      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
