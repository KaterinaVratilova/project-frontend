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

  constructor(private translate: TranslateService) {}

  onChangeLanguage(value: string) {
    console.log(value, this.translate);
  }

  onOpenModal() {
    console.log(this.modalOpen);
  }

  onCloseModal() {
    console.log(this.modalOpen);
  }
}
