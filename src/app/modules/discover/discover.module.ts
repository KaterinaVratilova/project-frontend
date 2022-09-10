import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { OverviewComponent } from "./pages/overview/overview.component";
import { StocksComponent } from "./pages/stocks/stocks.component";
import { CryptoComponent } from "./pages/crypto/crypto.component";
import { IndicesComponent } from "./indices/indices.component";
import { EtfsComponent } from "./etfs/etfs.component";
import { CommoditiesComponent } from "./commodities/commodities.component";
import { CurrenciesComponent } from "./currencies/currencies.component";
import { DiscoverLayoutComponent } from "./components/discover-layout/discover-layout.component";
import { InstrumentCardComponent } from "./components/instrument-card/instrument-card.component";
import { DiscoverRoutingModule } from "./discover-routing.module";
import { NavigationItemComponent } from "./components/navigation-item/navigation-item.component";
import { SelectButtonComponent } from "./components/select-button/select-button.component";
import { CategoryComponent } from "./components/category/category.component";

@NgModule({
  declarations: [
    OverviewComponent,
    StocksComponent,
    CryptoComponent,
    IndicesComponent,
    EtfsComponent,
    CommoditiesComponent,
    CurrenciesComponent,
    DiscoverLayoutComponent,
    InstrumentCardComponent,
    NavigationItemComponent,
    SelectButtonComponent,
    CategoryComponent,
  ],
  imports: [RouterModule, CommonModule, DiscoverRoutingModule],
})
export class DiscoverModule {}
