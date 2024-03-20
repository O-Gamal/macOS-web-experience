import * as Menubar from '@radix-ui/react-menubar';
import { cn } from '@utils/className';

import { MenuItemContent } from './Menu.types';
import MenuSeparator from './MenuSeparator';

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
      <Menubar.Item
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
      </Menubar.Item>
    </>
  );
};

export default MenuItem;
