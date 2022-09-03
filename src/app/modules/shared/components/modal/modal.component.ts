import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  styleUrls: ["modal.component.scss"],
  templateUrl: "modal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() border = false;

  @Input() width = 0;

  @Output() outCloseModal = new EventEmitter<void>();

  onCloseModal() {
    this.outCloseModal.emit();
  }
}
