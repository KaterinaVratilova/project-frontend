import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

export type SelectHeaderOption = {
  label: string;
  url: string;
};

@Component({
  selector: "app-select-header",
  templateUrl: "select-header.component.html",
  styleUrls: ["select-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectHeaderComponent {
  @Input() options: SelectHeaderOption[] = [];

  @Input() selected?: SelectHeaderOption;

  @Output() outCreateWatchlist = new EventEmitter<void>();

  @Output() outToggleSelect = new EventEmitter<void>();

  @Input() selectOpen = false;

  onToggle() {
    this.outToggleSelect.emit();
  }

  onClickOutside() {
    if (this.selectOpen) {
      this.outToggleSelect.emit();
    }
  }

  onCreateWatchlist() {
    this.outCreateWatchlist.emit();
  }
}
