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

  open = false;

  onToggle() {
    this.open = !this.open;
  }

  onClickOutside() {
    this.open = false;
  }

  onCreateWatchlist() {
    this.outCreateWatchlist.emit();
  }
}
