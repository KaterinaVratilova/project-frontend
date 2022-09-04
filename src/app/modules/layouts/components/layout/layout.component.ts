import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "../../../common/services/language.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  modalOpen = false;

  language: Observable<string> = this.languageService.getTemp();

  constructor(private translate: TranslateService, private languageService: LanguageService) {}

  onChangeLanguage(value: string) {
    this.languageService.saveTemp(value);
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
