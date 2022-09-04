import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LANGUAGES, LanguageService } from "./modules/common/services/language.service";
import { take } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private translate: TranslateService, private languageService: LanguageService) {
    translate.addLangs(Object.values(LANGUAGES));

    this.languageService
      .getTemp()
      .pipe(take(1))
      .subscribe((value) => {
        translate.setDefaultLang(value);
      });
  }
}
