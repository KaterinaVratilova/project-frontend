import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";

import { LoginRequest } from "../../services/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../app.module";
import { loginInitialized } from "../../store/actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: [""],
    password: [""],
  });

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  get username() {
    return this.form.get("email") as FormControl;
  }

  get password() {
    return this.form.get("password") as FormControl;
  }

  onSubmit() {
    const { email, password } = this.form.value as LoginRequest;

    this.store.dispatch(
      loginInitialized({
        request: {
          email,
          password,
        },
      })
    );
  }
}
