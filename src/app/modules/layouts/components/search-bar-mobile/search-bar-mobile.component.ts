import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-search-bar-mobile",
  styleUrls: ["search-bar-mobile.component.scss"],
  templateUrl: "search-bar-mobile.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarMobileComponent {}
