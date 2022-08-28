import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LayoutComponent } from "./components/layout/layout.component";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { LanguagesComponent } from "./components/languages/languages.component";
import { MenuBasicComponent } from "./components/menu/menu-basic/menu-basic.component";
import { MenuBottomComponent } from "./components/menu/menu-bottom/menu-bottom.component";
import { MenuComplementaryComponent } from "./components/menu/menu-complementary/menu-complementary.component";
import { MenuMobileComponent } from "./components/menu/menu-mobile/menu-mobile.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { MenuTopComponent } from "./components/menu-top/menu-top.component";
import { SharedModule } from "../shared/shared.module";
import { LanguageModalComponent } from "./components/language-modal/language-modal.component";

@NgModule({
  declarations: [
    LayoutComponent,
    AuthLayoutComponent,
    LanguagesComponent,
    MenuBasicComponent,
    MenuBasicComponent,
    MenuBottomComponent,
    MenuComplementaryComponent,
    MenuMobileComponent,
    ProfileComponent,
    MenuTopComponent,
    LanguageModalComponent,
  ],
  imports: [CommonModule, RouterModule.forChild([]), SharedModule],
})
export class LayoutsModule {}
