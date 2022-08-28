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
  ];

  @Output() outCloseModal = new EventEmitter<void>();

  onLanguageChange(value: string) {
    console.log(value);
  }

  onCloseModal() {
    this.outCloseModal.emit();
  }
}
