export type MenuItemContent = {
  label: React.ReactNode;
  isSeperate?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  details?: {
    shortcut?: React.ReactNode;
    subContent?: MenuItemContent[];
  };
  className?: string;
};

export type MenuItem = {
  label: React.ReactNode;
  content: MenuItemContent[];
};

type Align = 'start' | 'center' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';

export type MenuProps = {
  menuItems: MenuItem[];
  className?: string;
  align?: Align;
  side?: Side;
};

export type CustomMenuItemProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  align?: Align;
  side?: Side;
};
