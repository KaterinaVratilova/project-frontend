import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Subject, switchMap, takeUntil, tap } from "rxjs";

import { AppState } from "../../../../app.module";
import { selectWatchlistItem, selectWatchlistList } from "../../store/selectors";
import { SelectHeaderOption } from "../select-header/select-header.component";
import { ActivatedRoute, Router } from "@angular/router";
import { setSelectedWatchlist } from "../../store/actions";

@Component({
  selector: "app-top-bar",
  templateUrl: "top-bar.component.html",
  styleUrls: ["top-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit, OnDestroy {
  watchlists = this.store.select(selectWatchlistList);

  watchlistOptions = this.watchlists.pipe(
    map((watchlist) => {
      return watchlist.map<SelectHeaderOption>((item) => {
        return {
          id: item.id,
          url: "/watchlist/" + item.id,
          label: item.label,
          active: false,
        };
      });
    })
  );

  destroy = new Subject<boolean>();

  selectedWatchlist = this.store.select(selectWatchlistItem);

  @Input() selectOpen = false;

  @Output() outCreateWatchlist = new EventEmitter();

  @Output() outToggleSelect = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((value) =>
          this.watchlists.pipe(
            tap((watchlists) => {
              const id = value["id"];
              if (id) {
                const found = watchlists.find((watchlist) => watchlist.id === id);
                this.store.dispatch(setSelectedWatchlist({ watchlist: found }));
              }
            })
          )
        ),
        takeUntil(this.destroy)
      )
      .subscribe();

    // this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationStart),
    //     map((event) => event as NavigationStart),
    //     tap((event: NavigationStart) => {
    //
    //     }),
    //     takeUntil(this.destroy)
    //   )
    //   .subscribe();
  }

  onCreateWatchlist() {
    this.outCreateWatchlist.emit();
  }

  onToggleSelect() {
    this.outToggleSelect.emit();
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
