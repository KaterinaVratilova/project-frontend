import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-watchlist-card",
  templateUrl: "watchlist-card.component.html",
  styleUrls: ["watchlist-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistCardComponent {}
