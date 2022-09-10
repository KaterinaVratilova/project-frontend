import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { apiUrl } from "../../common/environment";

export type Watchlist = {
  id: string;
  label: string;
};

@Injectable()
export class WatchlistService {
  constructor(private http: HttpClient) {}

  getAll(userId: string) {
    return this.http.get<Watchlist[]>(`${apiUrl}/${userId}/watchlist`);
  }
}
