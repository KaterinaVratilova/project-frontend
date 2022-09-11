import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, map, take, tap } from "rxjs";
import { publishReplay, refCount } from "rxjs/operators";

import { AppState } from "../../../../app.module";
import { watchlistCreateInitialized, watchlistInitialized } from "../../store/actions";
import { selectUser } from "../../../auth/store/selectors";
import { CreateWatchlistForm } from "../../components/create-watchlist-modal/create-watchlist-modal.component";
import { selectWatchlistItem } from "../../store/selectors";

@Component({
  selector: "app-watchlist",
  templateUrl: "watchlist.component.html",
  styleUrls: ["watchlist.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistComponent implements OnInit {
  modalOpen = false;

  selectOpen = false;

  selectedWatchlist = this.store.select(selectWatchlistItem).pipe(
    map((watchlist) => {
      return watchlist?.label;
    })
  );

  user = this.store.select(selectUser).pipe(filter(Boolean), publishReplay(1), refCount());

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user
      .pipe(
        tap(async (user) => {
          this.store.dispatch(watchlistInitialized({ userId: user.id }));
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

  onSubmit(formData: CreateWatchlistForm) {
    this.user.pipe(take(1)).subscribe((value) => {
      this.store.dispatch(
        watchlistCreateInitialized({
          userId: value.id,
          label: formData.label,
        })
      );
      this.modalOpen = false;
    });
  }
}
