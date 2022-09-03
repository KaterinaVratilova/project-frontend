import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-news-feed",
  templateUrl: "news-feed.component.html",
  styleUrls: ["news-feed.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFeedComponent {}
