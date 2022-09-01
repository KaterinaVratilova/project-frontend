import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  styleUrls: ["modal.component.scss"],
  templateUrl: "modal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Output() outCloseModal = new EventEmitter<void>();

  onCloseModal() {
    this.outCloseModal.emit();
  }
}
