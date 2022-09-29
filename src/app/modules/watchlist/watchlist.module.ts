import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { WatchlistComponent } from "./pages/watchlist/watchlist.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { SelectHeaderComponent } from "./components/select-header/select-header.component";
import { SharedModule } from "../shared/shared.module";
import { WatchlistService } from "./services/watchlist.service";
import { CreateWatchlistModalComponent } from "./components/create-watchlist-modal/create-watchlist-modal.component";
import { WatchlistCardComponent } from "./components/watchlist-card/watchlist-card.component";

@NgModule({
  declarations: [
    WatchlistComponent,
    WatchlistCardComponent,
    TopBarComponent,
    SelectHeaderComponent,
    CreateWatchlistModalComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule, ReactiveFormsModule, RouterModule],
  providers: [WatchlistService],
})
export class WatchlistModule {}
