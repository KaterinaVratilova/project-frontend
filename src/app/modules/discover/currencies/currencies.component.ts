import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-currencies",
  templateUrl: "currencies.component.html",
  styleUrls: ["currencies.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrenciesComponent {}
