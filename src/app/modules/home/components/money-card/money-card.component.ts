import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-money-card",
  templateUrl: "money-card.component.html",
  styleUrls: ["money-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyCardComponent {}
