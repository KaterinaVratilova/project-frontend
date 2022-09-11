import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Watchlist } from "../../services/watchlist.service";

export type SelectHeaderOption = {
  label: string;
  url: string;
  active: boolean;
  id: string;
};

@Component({
  selector: "app-select-header",
  templateUrl: "select-header.component.html",
  styleUrls: ["select-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectHeaderComponent {
  @Input() options: SelectHeaderOption[] = [];

  @Input() selected?: Watchlist;

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
