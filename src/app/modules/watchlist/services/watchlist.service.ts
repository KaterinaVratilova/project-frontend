import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { apiUrl } from "../../common/environment";

export type Watchlist = {
  id: string;
  label: string;
};

export type WatchlistCreate = {
  userId: string;
  label: string;
};

@Injectable()
export class WatchlistService {
  constructor(private http: HttpClient) {}

  getAll(userId: string) {
    return this.http.get<Watchlist[]>(`${apiUrl}/user/${userId}/watchlist`);
  }

  create(request: WatchlistCreate) {
    return this.http.post<void>(`${apiUrl}/user/${request.userId}/watchlist`, {
      label: request.label,
    });
  }
}
