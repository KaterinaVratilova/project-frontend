import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MenuItem } from "../types";
import { Router } from "@angular/router";

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
      url: "/settings",
      icon: "settings",
    },
    {
      active: false,
      label: "Help",
      url: "#",
      icon: "quiz",
    },
  ];

  constructor(private router: Router) {}

  onLogout() {
    localStorage.clear();
    this.router.navigate(["logout"]);
  }
}
