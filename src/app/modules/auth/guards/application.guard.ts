import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { JwtTokenService } from "../services/jwt-token.service";

@Injectable({ providedIn: "root" })
export class ApplicationGuard implements CanActivate {
  constructor(private jwtTokenService: JwtTokenService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const hasToken = this.jwtTokenService.get();

    if (hasToken) {
      this.router.navigateByUrl("/home");
      return false;
    }

    return true;
  }
}
