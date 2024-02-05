export type MenuItemContent = {
  label: React.ReactNode;
  isSeperate?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  details?: {
    shortcut?: React.ReactNode;
    subContent?: MenuItemContent[];
  };
};

export type MenuItem = {
  label: React.ReactNode;
  content: MenuItemContent[];
};

export type MenuProps = {
  menuItems: MenuItem[];
  className?: string;
};
