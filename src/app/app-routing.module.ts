import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./modules/layouts/components/layout/layout.component";
import { RegisterComponent } from "./modules/auth/pages/register/register.component";
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { AuthLayoutComponent } from "./modules/layouts/components/auth-layout/auth-layout.component";
import { PortfolioComponent } from "./modules/portfolio/pages/portfolio/portfolio.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "portfolio",
        component: PortfolioComponent,
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
