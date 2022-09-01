import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
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
  languages: { [key: string]: string } = {
    cs: "Čeština",
    en: "English",
  };

  @Output() outOpenModal = new EventEmitter<void>();

  @Input() language = "";

  hideLanguage = this.store.select(selectHideLanguage);

  constructor(private store: Store<AppState>) {}

  onOpenModal() {
    this.outOpenModal.emit();
  }
}
