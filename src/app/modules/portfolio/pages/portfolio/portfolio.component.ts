import { ChangeDetectionStrategy, Component } from "@angular/core";
import { items } from "./data";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  items = items;

  backgroundImageResolver(img: string) {
    if (img.includes("0068B5")) {
      return "linear-gradient(to bottom,rgba(255,255,255,.75),rgba(44,44,44,0))";
    } else if (img.includes("f7f77f7")) {
      return "linear-gradient(to bottom,rgba(255,255,255,.75),rgba(44,44,44,0))";
    }

    return "#fff";
  }

  backgroundResolver(img: string) {
    if (img.includes("0068B5")) {
      return `#0068B5`;
    } else if (img.includes("f7f77f7")) {
      return "#f7f7f7";
    }

    return "#fff";
  }
}
