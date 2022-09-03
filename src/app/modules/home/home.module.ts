import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./pages/home/home.component";
import { MoneyCardComponent } from "./components/money-card/money-card.component";
import { NewsFeedComponent } from "./components/news-feed/news-feed.component";
import { BigMoversComponent } from "./components/big-movers/big-movers.component";
import { NewFeedComponent } from "./components/new-feed/new-feed.component";
import { FeedComponent } from "./components/feed/feed.component";
import { SharedModule } from "../shared/shared.module";
import { FeedModalComponent } from "./components/feed-modal/feed-modal.component";

@NgModule({
  declarations: [
    HomeComponent,
    MoneyCardComponent,
    NewsFeedComponent,
    BigMoversComponent,
    NewFeedComponent,
    FeedComponent,
    FeedModalComponent,
  ],
  imports: [SharedModule, CommonModule],
})
export class HomeModule {}
