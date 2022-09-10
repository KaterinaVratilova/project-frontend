import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-create-wishlist-modal",
  templateUrl: "create-watchlist-modal.component.html",
  styleUrls: ["create-watchlist-modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateWatchlistModalComponent {}
