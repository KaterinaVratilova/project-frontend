import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-menu-top",
  templateUrl: "menu-top.component.html",
  styleUrls: ["menu-top.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuTopComponent {
  @Input() open = true;

  @Output() outOpen = new EventEmitter<boolean>();

  toggle() {
    this.outOpen.emit(!this.open);
  }
}
