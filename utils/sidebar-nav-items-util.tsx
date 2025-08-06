import { TNavItemsType } from "@/types/sidebar-nav-type";

enum NAV_ITEMS_ENUM {
  DASHBOARD = "Dashboard",
  TRANSACTIONS = "Transactions",
  REPORTS = "Reports",
  SETTINGS = "Settings",
}

const { REPORTS, TRANSACTIONS, DASHBOARD, SETTINGS } = NAV_ITEMS_ENUM;

const navItems: TNavItemsType = [
  { label: DASHBOARD, href: "/dashboard", active: true },
  { label: REPORTS, href: "/reports" },
  { label: TRANSACTIONS, href: "/transactions" },
  { label: SETTINGS, href: "/settings" },
];

export { navItems, NAV_ITEMS_ENUM };
