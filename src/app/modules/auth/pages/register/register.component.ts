import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormBuilder, FormControl } from "@angular/forms";

import { AppState } from "../../../../app.module";
import { setHideLanguage } from "../../../layouts/store/actions";
import { RegisterRequest } from "../../services/auth.service";
import { registerInitialized } from "../../store/actions";
import { selectLoading } from "../../store/selectors";

@Component({
  selector: "app-register",
  styleUrls: ["register.component.scss"],
  templateUrl: "register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit, OnDestroy {
  form = this.formBuilder.group({
    username: [""],
    email: [""],
    password: [""],
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
    // Kdyz kliknu na tlacitko submit, zavola se localhost:3000/register nebo ne?

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
