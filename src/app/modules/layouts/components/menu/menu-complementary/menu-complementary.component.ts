import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MenuItem } from "../types";

@Component({
  selector: "app-menu-complementary",
  templateUrl: "menu-complementary.component.html",
  styleUrls: ["menu-complementary.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComplementaryComponent {
  items: MenuItem[] = [
    {
      active: false,
      label: "Etoro club",
      url: "#",
      icon: "animation",
    },
    {
      active: false,
      label: "Invite friends",
      url: "#",
      icon: "emoji_people",
    },
    {
      active: false,
      label: "Widthdraw funds",
      url: "#",
      icon: "payments",
    },
    {
      active: false,
      label: "Settings",
      url: "#",
      icon: "settings",
    },
    {
      active: false,
      label: "Help",
      url: "#",
      icon: "quiz",
    },
  ];
}
