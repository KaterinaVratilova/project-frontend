import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-commodities",
  templateUrl: "commodities.component.html",
  styleUrls: ["commodities.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommoditiesComponent {}
