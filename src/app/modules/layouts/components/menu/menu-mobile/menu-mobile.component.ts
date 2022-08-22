import { ChangeDetectionStrategy, Component } from "@angular/core";

import { menuItems } from "../menu-basic/menu-items";

@Component({
  selector: "app-menu-mobile",
  templateUrl: "menu-mobile.component.html",
  styleUrls: ["menu-mobile.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuMobileComponent {
  items = menuItems;
}
