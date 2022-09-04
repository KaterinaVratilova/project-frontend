import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { JwtTokenService } from "../auth/services/jwt-token.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private jwtTokenService: JwtTokenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const hasToken = this.jwtTokenService.get();

    if (!hasToken) {
      // this.router.navigate(["user", user.id, "portfolio"]);
      // this.router.navigateByUrl(`/user/${user.id}/portfolio`);
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}
