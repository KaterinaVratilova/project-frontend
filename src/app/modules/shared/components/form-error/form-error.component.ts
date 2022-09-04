import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-form-error",
  templateUrl: "form-error.component.html",
  styleUrls: ["form-error.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorComponent {
  @Input() showError = false;
}
