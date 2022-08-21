import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { OrComponent } from "./components/or/or.component";
import { RegisterTitleComponent } from "./components/register-title/register-title.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, OrComponent, RegisterTitleComponent],
  imports: [CommonModule, SharedModule, TranslateModule.forChild()],
})
export class AuthModule {}
