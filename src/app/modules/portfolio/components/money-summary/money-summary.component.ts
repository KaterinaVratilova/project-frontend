import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-money-summary",
  templateUrl: "money-summary.component.html",
  styleUrls: ["money-summary.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneySummaryComponent {}
