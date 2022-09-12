import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./modules/layouts/components/layout/layout.component";
import { RegisterComponent } from "./modules/auth/pages/register/register.component";
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { AuthLayoutComponent } from "./modules/layouts/components/auth-layout/auth-layout.component";
import { PortfolioComponent } from "./modules/portfolio/pages/portfolio/portfolio.component";
import { WatchlistComponent } from "./modules/watchlist/pages/watchlist/watchlist.component";
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { SettingsComponent } from "./modules/settings/pages/settings/settings.component";
import { ForgotPasswordComponent } from "./modules/auth/pages/forgot-password/forgot-password.component";
import { NotFoundComponent } from "./modules/common/pages/not-found/not-found.component";
import { GeneralComponent } from "./modules/settings/pages/general/general.component";
import { LogoutComponent } from "./modules/auth/pages/logout/logout.component";
import { AuthGuard } from "./modules/auth/guards/auth.guard";
import { ApplicationGuard } from "./modules/auth/guards/application.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    canActivate: [ApplicationGuard],
    children: [
      {
        path: "portfolio",
        component: PortfolioComponent,
      },
      {
        path: "watchlist",
        component: WatchlistComponent,
      },
      {
        path: "watchlist/:id",
        component: WatchlistComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "discover",
        loadChildren: () => import("./modules/discover/discover.module").then((m) => m.DiscoverModule),
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "settings/general",
        component: GeneralComponent,
      },
    ],
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
      },
      {
        path: "logout",
        component: LogoutComponent,
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
