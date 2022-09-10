import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-select-button",
  templateUrl: "select-button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectButtonComponent {
  @Input() label = "";
}
