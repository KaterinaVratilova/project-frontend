import { ChangeDetectionStrategy, Component } from "@angular/core";

import { menuItems } from "./menu-items";

@Component({
  selector: "app-menu",
  templateUrl: "menu-basic.component.html",
  styleUrls: ["menu-basic.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBasicComponent {
  items = menuItems;

  open = true;

  onToggle(open: boolean) {
    this.open = open;
  }
}
