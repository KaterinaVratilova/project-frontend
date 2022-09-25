import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ObservablesComponent } from "./pages/observables/observables.component";

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [NotFoundComponent, ObservablesComponent],
  providers: [],
})
export class CommonModule {}
