import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search-input",
  templateUrl: "search-input.component.html",
  styleUrls: ["search-input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {

  @Output() outKeyDown = new EventEmitter<string>();

  onKeyDown(event: KeyboardEvent) {
    const { value } = event.target as HTMLInputElement;

    this.outKeyDown.emit(value || "");
  }

}
