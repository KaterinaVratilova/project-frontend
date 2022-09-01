import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

type Language = {
  imgUrl: string;
  label: string;
  value: string;
};

@Component({
  selector: "app-language-modal",
  templateUrl: "language-modal.component.html",
  styleUrls: ["language-modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageModalComponent {
  languages: Language[] = [
    {
      imgUrl: "assets/images/flags/uk-flag.svg",
      label: "English",
      value: "en",
    },
    {
      imgUrl: "assets/images/flags/czech-flag.svg",
      label: "Czech",
      value: "cs",
    },
  ];

  @Output() outCloseModal = new EventEmitter<void>();

  @Output() outChangeLanguage = new EventEmitter<string>();

  onLanguageChange(value: string) {
    this.outChangeLanguage.emit(value);
  }

  onCloseModal() {
    this.outCloseModal.emit();
  }
}
