import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-big-movers",
  templateUrl: "big-movers.component.html",
  styleUrls: ["big-movers.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigMoversComponent {}
