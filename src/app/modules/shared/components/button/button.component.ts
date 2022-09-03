import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

export type ROUNDED = "light" | "normal";

export type MODE = "primary" | "secondary" | "transparent";

export type ButtonType = "submit" | "button";

export type TextPosition = "left" | "right" | "middle";

export type Size = "normal" | "small";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() size: Size = "normal";

  @Input() rounded: ROUNDED = "normal";

  @Input() mode: MODE = "primary";

  @Input() textPosition: TextPosition = "middle";

  @Input() type: ButtonType = "button";

  @Input() border = true;

  @Input() disabled = false;

  @Output() outClick = new EventEmitter<void>();

  get clazz() {
    return this._mode + " " + this.textPosition + " " + (this.border ? "" : "no-border") + " " + this.size;
  }

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
