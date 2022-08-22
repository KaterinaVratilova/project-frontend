import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutsModule } from "./modules/layouts/layouts.module";
import { AuthModule } from "./modules/auth/auth.module";
import { layoutsReducer, LayoutsState } from "./modules/layouts/store/reducer";
import { authReducer, AuthState } from "./modules/auth/store/reducer";
import { AuthEffect } from "./modules/auth/store/effects";
import { HomeModule } from "./modules/home/home.module";
import { WatchlistModule } from "./modules/watchlist/watchlist.module";
import { DiscoverModule } from "./modules/discover/discover.module";

export type AppState = {
  layouts: LayoutsState;
  auth: AuthState;
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutsModule,
    AuthModule,
    HomeModule,
    WatchlistModule,
    DiscoverModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({ layouts: layoutsReducer, auth: authReducer }, {}),
    EffectsModule.forRoot([AuthEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
