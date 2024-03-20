import React from 'react';

import * as ContextMenuComponent from '@radix-ui/react-context-menu';

import { MenuItemContent } from '../menu/Menu.types';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';

type ContextMenuProps = {
  children: React.ReactNode;
  menuItems: MenuItemContent[];
  className?: string;
};

const ContextMenu = ({ children, menuItems, className }: ContextMenuProps) => {
  return (
    <ContextMenuComponent.Root>
      <ContextMenuComponent.Trigger className={className}>
        {children}
      </ContextMenuComponent.Trigger>
      <ContextMenuComponent.Portal>
        <ContextMenuComponent.Content
          alignOffset={6}
          className='min-w-[180px] cursor-default select-none rounded-md border border-white/30 bg-black/30 p-[5px] text-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] backdrop-blur-xl will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]'
        >
          {menuItems.map((item, index) =>
            item.details?.subContent ? (
              <SubMenuItem
                key={index}
                label={item.label}
                details={item.details}
                isSeperate={item.isSeperate}
              />
            ) : (
              <MenuItem
                key={index}
                label={item.label}
                onClick={item.onClick}
                disabled={item.disabled}
                details={item.details}
                isSeperate={item.isSeperate}
              />
            )
          )}
        </ContextMenuComponent.Content>
      </ContextMenuComponent.Portal>
    </ContextMenuComponent.Root>
  );
};

export default ContextMenu;
