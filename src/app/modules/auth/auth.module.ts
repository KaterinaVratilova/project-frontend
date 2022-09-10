import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { OrComponent } from "./components/or/or.component";
import { RegisterTitleComponent } from "./components/register-title/register-title.component";
import { LoginService } from "./services/login.service";
import { RegisterService } from "./services/register.service";
import { LogoutComponent } from "./pages/logout/logout.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";

@NgModule({
  declarations: [
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
    OrComponent,
    RegisterTitleComponent,
    ForgotPasswordComponent,
  ],
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
