import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { AppState } from "../../../../app.module";
import { loginInitialized } from "../../store/actions";
import { selectError } from "../../store/selectors";

type LoginForm = {
  email: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    email: new FormControl("", { validators: [Validators.required], nonNullable: true }),
    password: new FormControl("", { validators: [Validators.required], nonNullable: true }),
  });

  error = this.store.select(selectError);

  constructor(private formBuilder: NonNullableFormBuilder, private store: Store<AppState>) {}

  get username() {
    return this.form.get("email") as FormControl;
  }

  get password() {
    return this.form.get("password") as FormControl;
  }

  onSubmit({ email, password }: any) {
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
