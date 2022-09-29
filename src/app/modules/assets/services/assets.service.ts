import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { apiUrl } from "../../common/environment";

@Injectable({ providedIn: "root" })
export class AssetsService {
  constructor(private http: HttpClient) {}

  get(search: string) {
    return this.http.get(`${apiUrl}/assets?search=${search}`);
  }
}
