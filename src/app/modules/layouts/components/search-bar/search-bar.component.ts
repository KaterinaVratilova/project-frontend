import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-search-bar",
  styleUrls: ["search-bar.component.scss"],
  templateUrl: "search-bar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {}
