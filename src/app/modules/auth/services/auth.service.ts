import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export type RegisterRequest = {
  email: string;
  username: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(request: RegisterRequest) {
    return this.http.post("http://localhost:3000/register", request);
  }
}
