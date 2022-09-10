import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { MoneySummaryComponent } from "./components/money-summary/money-summary.component";
import { MoneyNodeComponent } from "./components/money-node/money-node.component";

@NgModule({
  declarations: [PortfolioComponent, MoneySummaryComponent, MoneyNodeComponent],
  imports: [CommonModule],
})
export class PortfolioModule {}
