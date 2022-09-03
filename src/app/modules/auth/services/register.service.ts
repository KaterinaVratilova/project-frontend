import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RegisterRequest } from "../request";

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(request: RegisterRequest) {
    return this.http.post(`http://localhost:8080/api/v1/user`, request);
  }
}
