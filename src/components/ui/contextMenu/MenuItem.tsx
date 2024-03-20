import * as ContextMenu from '@radix-ui/react-context-menu';
import { cn } from '@utils/className';

import { MenuItemContent } from '../menu/Menu.types';
import MenuSeparator from '../menu/MenuSeparator';

const MenuItem = ({
  label,
  onClick,
  disabled,
  details,
  isSeperate,
  className,
}: MenuItemContent) => {
  return (
    <>
      {isSeperate && <MenuSeparator />}
      <ContextMenu.Item
        onSelect={onClick}
        disabled={disabled}
        className={cn(
          'group relative flex select-none items-center rounded px-2.5 py-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-600 data-[disabled]:font-medium data-[disabled]:text-white/30',
          className
        )}
      >
        <div className='flex w-full items-center justify-between'>
          <span>{label}</span>
          {details?.shortcut && (
            <span className='text-[13px] font-medium tracking-widest text-white/30 group-data-[highlighted]:text-white'>
              {details.shortcut}
            </span>
          )}
        </div>
      </ContextMenu.Item>
    </>
  );
};

export default MenuItem;
