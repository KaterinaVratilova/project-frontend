import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-portfolio-default",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {}
