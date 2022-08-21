import { ChangeDetectionStrategy, Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = "";

  @Input() id: string = "";

  @Input() type: string = "";

  @Input() label: string = "";

  // @Output() outText = new EventEmitter();

  @Input() set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  // tslint:disable-next-line:variable-name
  _value = "";

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this._value = value || "";
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onChangeValue(e: any) {
    const value = e.target.value;
    this.onChange(value);
    // this.outText.emit(value);
  }
}
