import { AbstractControl } from "@angular/forms";

export function emailValidator(control: AbstractControl) {
  const value = control.value || "";

  if (!value) {
    return null;
  }

  if (!value?.toLowerCase().match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")) {
    return { invalidEmail: true };
  }

  return null;
}
