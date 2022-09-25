import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MockUserService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get("http://localhost:3000/user");
  }
}
