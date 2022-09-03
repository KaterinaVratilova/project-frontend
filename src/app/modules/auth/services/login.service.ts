import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { LoginRequest } from "../request";
import { LoginResponse } from "../response";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>(`http://localhost:8080/api/v1/auth`, request);
  }
}
