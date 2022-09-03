import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  modalOpen = false;

  language = this.translate.defaultLang;

  constructor(private translate: TranslateService) {}

  onChangeLanguage(value: string) {
    this.language = value;
    this.translate.use(value);
    this.modalOpen = false;
  }

  onOpenModal() {
    this.modalOpen = true;
  }

  onCloseModal() {
    this.modalOpen = false;
  }
}
