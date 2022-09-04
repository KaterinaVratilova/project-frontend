import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./modules/layouts/components/layout/layout.component";
import { RegisterComponent } from "./modules/auth/pages/register/register.component";
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { AuthLayoutComponent } from "./modules/layouts/components/auth-layout/auth-layout.component";
import { PortfolioComponent } from "./modules/portfolio/pages/portfolio/portfolio.component";
import { WatchlistComponent } from "./modules/watchlist/pages/watchlist/watchlist.component";
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { DiscoverComponent } from "./modules/discover/pages/discover/discover.component";
import { AuthGuard } from "./modules/common/auth.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    canActivate: [AuthGuard],
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
        path: "home",
        component: HomeComponent,
      },
      {
        path: "discover",
        component: DiscoverComponent,
      },
    ],
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
