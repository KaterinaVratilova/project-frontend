import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
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
import { watchlistReducer, WatchlistState } from "./modules/watchlist/store/reducer";
import { PortfolioModule } from "./modules/portfolio/portfolio.module";
import { SettingsModule } from "./modules/settings/settings.module";
import { CommonModule } from "./modules/common/common.module";
import { WatchlistEffect } from "./modules/watchlist/store/effects";
import { AuthInterceptor } from "./modules/common/interceptors/auth.interceptor";

export type AppState = {
  layouts: LayoutsState;
  auth: AuthState;
  watchlist: WatchlistState;
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
    PortfolioModule,
    SettingsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({ layouts: layoutsReducer, auth: authReducer, watchlist: watchlistReducer }, {}),
    EffectsModule.forRoot([AuthEffect, WatchlistEffect]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
