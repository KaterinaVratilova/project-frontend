import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

import { AppState } from "../../../../app.module";
import { setHideLanguage } from "../../../layouts/store/actions";
import { registerInitialized } from "../../store/actions";
import { selectLoading } from "../../store/selectors";
import { RegisterRequest } from "../../request";
import { emailValidator } from "../../../common/validators/emailValidator";

@Component({
  selector: "app-register",
  styleUrls: ["register.component.scss"],
  templateUrl: "register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit, OnDestroy {
  form = this.formBuilder.group({
    username: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    email: ["", [Validators.required, emailValidator]],
    password: ["", [Validators.required, Validators.minLength(9)]],
  });

  loading = this.store.select(selectLoading);

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  get username() {
    return this.form.get("username") as FormControl;
  }

  get password() {
    return this.form.get("password") as FormControl;
  }

  get email() {
    return this.form.get("email") as FormControl;
  }

  onSubmit() {
    const { username, email, password } = this.form.value as RegisterRequest;

    this.store.dispatch(
      registerInitialized({
        request: {
          username,
          password,
          email,
        },
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(setHideLanguage({ hide: true }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(setHideLanguage({ hide: false }));
  }
}
