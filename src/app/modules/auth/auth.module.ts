import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { OrComponent } from "./components/or/or.component";
import { RegisterTitleComponent } from "./components/register-title/register-title.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { LoginService } from "./services/login.service";
import { RegisterService } from "./services/register.service";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, OrComponent, RegisterTitleComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [LoginService, RegisterService],
})
export class AuthModule {}
