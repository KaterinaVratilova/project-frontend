import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export type RegisterRequest = {
  email: string;
  username: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  username: string;
};

export type LoginResponse = {
  accessToken: string;
  user: User;
};

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(request: RegisterRequest) {
    return this.http.post("http://localhost:3000/register", request);
  }

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>("http://localhost:3000/login", request);
  }
}
