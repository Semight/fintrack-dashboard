export type TNavItem = {
  label: string;
  href: string;
  active?: boolean;
  icon?: React.ComponentType<any>;
};

export type TNavItemsType = TNavItem[];