import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-feed",
  templateUrl: "feed.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {}
