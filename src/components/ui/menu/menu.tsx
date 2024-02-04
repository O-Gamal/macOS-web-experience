import * as Menubar from '@radix-ui/react-menubar';
import { cn } from '@utils/className';

import { MenuProps } from './menu.types';

const Menu = ({ menuItems, className }: MenuProps) => {
  return (
    <Menubar.Root
      className={cn('flex h-[30px] items-center text-black/80', className)}
    >
      {menuItems.map((menu, index) => (
        <Menubar.Menu key={index}>
          <Menubar.Trigger className='h-6 select-none rounded px-3 text-sm font-medium leading-none outline-none data-[highlighted]:bg-black/10 data-[state=open]:bg-black/10'>
            {menu.label}
          </Menubar.Trigger>

          <Menubar.Portal>
            <Menubar.Content
              sideOffset={6}
              side='bottom'
              align='start'
              className='min-w-[220px] rounded-md border border-white/30 bg-black/20 p-[5px] text-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] backdrop-blur-xl will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]'
            >
              {menu.content.map((item, index) =>
                item === 'seperator' ? (
                  <Menubar.Separator
                    key={index}
                    className='m-[5px] h-[1px] bg-white/20'
                  />
                ) : (
                  <Menubar.Item
                    key={index}
                    onSelect={item.onClick}
                    disabled={item.disabled}
                    className='group relative flex select-none items-center rounded px-2.5 py-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-600 data-[disabled]:font-medium data-[disabled]:text-white/30'
                  >
                    <div className='flex w-full items-center justify-between'>
                      <span className=''>{item.label}</span>
                      {item.details?.shortcut && (
                        <span className='text-[13px] font-medium tracking-widest text-white/30 group-data-[highlighted]:text-white'>
                          {item.details.shortcut}
                        </span>
                      )}
                    </div>
                  </Menubar.Item>
                )
              )}
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      ))}
    </Menubar.Root>
  );
};

export default Menu;
