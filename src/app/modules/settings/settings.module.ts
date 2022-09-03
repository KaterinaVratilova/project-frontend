import { NgModule } from "@angular/core";

import { SettingsComponent } from "./pages/settings/settings.component";
import { SettingsCardComponent } from "./components/settings-card/settings-card.component";
import { GeneralComponent } from "./pages/general/general.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SettingsComponent, SettingsCardComponent, GeneralComponent],
  imports: [RouterModule],
})
export class SettingsModule {}
