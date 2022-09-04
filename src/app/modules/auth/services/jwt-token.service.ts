import { Injectable } from "@angular/core";

const JWT_TOKEN_KEY = "jwtToken";

@Injectable({ providedIn: "root" })
export class JwtTokenService {
  get() {
    const token = localStorage.getItem(JWT_TOKEN_KEY);

    return token || undefined;
  }

  set(token: string) {
    localStorage.setItem(JWT_TOKEN_KEY, token);
  }

  clear() {
    localStorage.clear();
  }
}
