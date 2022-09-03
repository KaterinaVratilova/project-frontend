import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-feed-modal",
  templateUrl: "feed-modal.component.html",
  styleUrls: ["feed-modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedModalComponent {
  @Input() currentCharacters = 0;

  @Input() maxCharacters = 0;

  @Input() valid = false;

  @Output() outCloseModal = new EventEmitter<void>();

  @Output() outKeyDown = new EventEmitter<number>();

  @Output() outSubmit = new EventEmitter<void>();

  onKeyDown(event: KeyboardEvent) {
    const textarea = event.target as HTMLTextAreaElement;
    this.outKeyDown.emit(textarea.value?.length || 0);
  }

  onCloseModal() {
    this.outCloseModal.emit();
  }

  onSubmit() {
    this.outSubmit.emit();
  }
}
