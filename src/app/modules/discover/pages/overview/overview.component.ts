import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-discover",
  templateUrl: "overview.component.html",
  styleUrls: ["overview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {}
