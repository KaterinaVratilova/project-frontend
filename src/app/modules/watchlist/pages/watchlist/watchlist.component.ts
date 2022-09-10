import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, take, tap } from "rxjs";

import { AppState } from "../../../../app.module";
import { watchlistInitialized } from "../../store/actions";
import { selectUser } from "../../../auth/store/selectors";

@Component({
  selector: "app-watchlist",
  templateUrl: "watchlist.component.html",
  styleUrls: ["watchlist.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistComponent implements OnInit {
  modalOpen = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectUser)
      .pipe(
        filter(Boolean),
        tap((user) => {
          this.store.dispatch(watchlistInitialized({ userId: user.id }));
        }),
        take(1)
      )
      .subscribe();
  }
}
