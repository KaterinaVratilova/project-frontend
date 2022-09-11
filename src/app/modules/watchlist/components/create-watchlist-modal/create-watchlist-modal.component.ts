import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

export type CreateWatchlistForm = {
  label: string;
};

@Component({
  selector: "app-create-wishlist-modal",
  templateUrl: "create-watchlist-modal.component.html",
  styleUrls: ["create-watchlist-modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateWatchlistModalComponent {
  @Output() outClose = new EventEmitter();

  @Output() outSubmit = new EventEmitter<CreateWatchlistForm>();

  form = this.formBuilder.nonNullable.group({
    label: ["", [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  get label() {
    return this.form.get("label") as FormControl;
  }

  onClose() {
    this.outClose.emit();
  }

  onSubmit() {
    const formValue = this.form.value as CreateWatchlistForm;

    this.outSubmit.emit(formValue);
  }
}
