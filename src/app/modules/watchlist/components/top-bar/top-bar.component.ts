import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs";

import { AppState } from "../../../../app.module";
import { selectWatchlistList } from "../../store/selectors";
import { SelectHeaderOption } from "../select-header/select-header.component";

@Component({
  selector: "app-top-bar",
  templateUrl: "top-bar.component.html",
  styleUrls: ["top-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  watchlist = this.store.select(selectWatchlistList).pipe(
    map((watchlist) => {
      return watchlist.map<SelectHeaderOption>((item) => {
        return {
          url: "",
          label: item.label,
        };
      });
    })
  );

  @Input() selectOpen = false;

  @Output() outCreateWatchlist = new EventEmitter();

  @Output() outToggleSelect = new EventEmitter();

  constructor(private store: Store<AppState>) {}

  onCreateWatchlist() {
    this.outCreateWatchlist.emit();
  }

  onToggleSelect() {
    this.outToggleSelect.emit();
  }
}
