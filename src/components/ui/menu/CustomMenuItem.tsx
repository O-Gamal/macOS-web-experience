import * as Menubar from '@radix-ui/react-menubar';
import { cn } from '@utils/className';

import { CustomMenuItemProps } from './Menu.types';

const CustomMenuItem = ({
  label,
  children,
  className,
  align = 'start',
  side = 'bottom',
}: CustomMenuItemProps) => {
  return (
    <Menubar.Root
      className={cn('flex h-[30px] items-center text-black/80', className)}
    >
      <Menubar.Menu>
        <Menubar.Trigger className='h-6 select-none rounded px-3 text-sm font-medium leading-none outline-none data-[highlighted]:bg-black/10 data-[state=open]:bg-black/10'>
          {label}
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            sideOffset={6}
            align={align}
            side={side}
            className='min-w-64 rounded-md border border-white/30 bg-black/20 p-2 text-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] backdrop-blur-xl will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]'
          >
            {children}
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default CustomMenuItem;
