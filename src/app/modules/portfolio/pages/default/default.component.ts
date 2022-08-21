import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-portfolio-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent {}
