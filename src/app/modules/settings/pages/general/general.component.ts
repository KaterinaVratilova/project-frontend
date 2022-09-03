import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-general",
  templateUrl: "general.component.html",
  styleUrls: ["general.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralComponent {}
