import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { ModalComponent } from "./components/modal/modal.component";
import { FormErrorComponent } from "./components/form-error/form-error.component";

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent, InputComponent, CheckboxComponent, ModalComponent, FormErrorComponent],
  declarations: [ButtonComponent, InputComponent, CheckboxComponent, ModalComponent, FormErrorComponent],
  providers: [],
})
export class SharedModule {}
