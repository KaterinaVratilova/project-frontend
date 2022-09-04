import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { AppState } from "../../../../app.module";
import { loginInitialized } from "../../store/actions";
import { LoginRequest } from "../../request";
import { selectError } from "../../store/selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  error = this.store.select(selectError);

  form = this.formBuilder.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
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
