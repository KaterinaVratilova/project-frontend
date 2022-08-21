import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../../../app.module";
import { selectHideLanguage } from "../../store/selectors";

@Component({
  selector: "app-languages",
  templateUrl: "./languages.component.html",
  styleUrls: ["./languages.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesComponent {
  hideLanguage = this.store.select(selectHideLanguage);

  constructor(private store: Store<AppState>) {}
}
