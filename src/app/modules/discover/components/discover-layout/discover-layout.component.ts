import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Url } from "../navigation-item/navigation-item.component";

@Component({
  selector: "app-discover-layout",
  styleUrls: ["discover-layout.component.scss"],
  templateUrl: "discover-layout.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscoverLayoutComponent {
  urls: Url[] = [
    {
      clazz: "category-wrapper",
      path: "/discover/overview",
      label: "Overview",
    },
    {
      clazz: "category-wrapper-stocks",
      path: "/discover/stocks",
      label: "Stocks",
    },
    {
      clazz: "category-wrapper-crypto",
      path: "/discover/crypto",
      label: "Crypto",
    },
    {
      clazz: "category-wrapper-etfs",
      path: "/discover/etfs",
      label: "ETFs",
    },
    {
      clazz: "category-wrapper-commodities",
      path: "/discover/commodities",
      label: "Commodities",
    },
    {
      clazz: "category-wrapper-currencies",
      path: "/discover/currencies",
      label: "Currencies",
    },
  ];
}
