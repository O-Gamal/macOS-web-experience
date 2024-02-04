type Seperator = 'seperator';

type MenuItemContent = {
  label: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  details?: {
    shortcut?: React.ReactNode;
    subContent?: MenuItemContent[];
  };
};

export type MenuItem = {
  label: React.ReactNode;
  content: (MenuItemContent | Seperator)[];
};

export type MenuProps = {
  menuItems: MenuItem[];
  className?: string;
};
