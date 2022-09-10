import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StocksComponent } from "./pages/stocks/stocks.component";
import { DiscoverLayoutComponent } from "./components/discover-layout/discover-layout.component";
import { OverviewComponent } from "./pages/overview/overview.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "stocks",
  },
  {
    path: "",
    component: DiscoverLayoutComponent,
    children: [
      {
        path: "stocks",
        component: StocksComponent,
      },
      {
        path: "overview",
        component: OverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverRoutingModule {}
