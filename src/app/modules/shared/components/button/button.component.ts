import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

export type ROUNDED = "light" | "normal";

export type MODE = "primary" | "secondary" | "transparent";

export type ButtonType = "submit" | "button";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() rounded: ROUNDED = "normal";

  @Input() mode: MODE = "primary";

  @Input() type: ButtonType = "button";

  @Output() outClick = new EventEmitter<void>();

  get _mode() {
    if (this.mode === "transparent") {
      return "btn-transparent";
    } else if (this.mode === "secondary") {
      return "btn-secondary";
    }

    return "btn-primary";
  }

  onClick() {
    this.outClick.emit();
  }
}
