import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent, InputComponent, CheckboxComponent],
  declarations: [ButtonComponent, InputComponent, CheckboxComponent],
  providers: [],
})
export class SharedModule {}
