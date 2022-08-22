import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-watchlist",
  templateUrl: "watchlist.component.html",
  styleUrls: ["watchlist.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistComponent {}
