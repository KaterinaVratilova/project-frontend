import { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    url: "/home",
    active: true,
    icon: "home",
  },
  {
    label: "Watchlist",
    url: "/watchlist",
    active: false,
    icon: "checklist",
  },
  {
    label: "Portfolio",
    url: "/portfolio",
    active: false,
    icon: "pie_chart",
  },
  {
    label: "Discover",
    url: "/discover",
    active: false,
    icon: "manage_search",
  },
];
