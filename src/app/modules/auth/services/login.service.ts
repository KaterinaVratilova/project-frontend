import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { LoginRequest } from "../request";
import { LoginResponse } from "../response";
import { apiUrl } from "../../common/environment";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>(`${apiUrl}/auth`, request);
  }
}
