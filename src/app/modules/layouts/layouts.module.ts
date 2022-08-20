import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./components/layout/layout.component";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { RouterModule } from "@angular/router";
import { LanguagesComponent } from "./components/languages/languages.component";

@NgModule({
  declarations: [LayoutComponent, AuthLayoutComponent, LanguagesComponent],
  imports: [CommonModule, RouterModule.forChild([])],
})
export class LayoutsModule {}
