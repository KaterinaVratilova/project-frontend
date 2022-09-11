import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { JwtTokenService } from "../../auth/services/jwt-token.service";
import { apiUrl } from "../environment";

const skipUrls = ["auth", "user"];

export function isSkipUrl(currentUrl: string) {
  return skipUrls.some((skipUrl) => {
    return `${apiUrl}/${skipUrl}` === currentUrl;
  });
}

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private jwtTokenService: JwtTokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.jwtTokenService.get();
    const found = isSkipUrl(req.url);

    if (token && !found) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token),
      });

      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
