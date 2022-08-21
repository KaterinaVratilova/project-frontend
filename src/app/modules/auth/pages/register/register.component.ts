import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../../../app.module";
import { setHideLanguage } from "../../../layouts/store/actions";

@Component({
  selector: "app-register",
  styleUrls: ["register.component.scss"],
  templateUrl: "register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(setHideLanguage({ hide: true }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(setHideLanguage({ hide: false }));
  }
}
