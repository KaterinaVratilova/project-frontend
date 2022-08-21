import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./modules/layouts/components/layout/layout.component";
import { RegisterComponent } from "./modules/auth/pages/register/register.component";
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { DefaultComponent as PortfolioDefaultComponent } from "./modules/portfolio/pages/default/default.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "portfolio",
    component: PortfolioDefaultComponent,
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
