import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { WatchlistComponent } from "./pages/watchlist/watchlist.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { SelectHeaderComponent } from "./components/select-header/select-header.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [WatchlistComponent, TopBarComponent, SelectHeaderComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
})
export class WatchlistModule {}
