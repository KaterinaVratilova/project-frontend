import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, take, tap } from "rxjs";

import { AppState } from "../../../../app.module";
import { watchlistCreateInitialized, watchlistInitialized } from "../../store/actions";
import { selectUser } from "../../../auth/store/selectors";

const wait = (time: number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve("done");
  }, time);
});

@Component({
  selector: "app-watchlist",
  templateUrl: "watchlist.component.html",
  styleUrls: ["watchlist.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistComponent implements OnInit {
  modalOpen = false;

  selectOpen = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectUser)
      .pipe(
        filter(Boolean),
        tap(async (user) => {
          this.store.dispatch(watchlistInitialized({ userId: user.id }));

          await wait(2000);

          this.store.dispatch(watchlistCreateInitialized({ label: "USA", userId: user.id }));
        }),
        take(1)
      )
      .subscribe();
  }

  onCreateWatchlist() {
    this.modalOpen = true;
    this.selectOpen = false;
  }

  onToggleSelect() {
    this.selectOpen = !this.selectOpen;
  }

  onClose() {
    this.modalOpen = false;
  }
}
