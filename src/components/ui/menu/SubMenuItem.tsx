import * as Menubar from '@radix-ui/react-menubar';

import Icon from '../icon';
import { MenuItemContent } from './Menu.types';
import MenuItem from './MenuItem';
import MenuSeparator from './MenuSeparator';

const SubMenuItem = ({ label, details, isSeperate }: MenuItemContent) => {
  return (
    <>
      {isSeperate && <MenuSeparator />}
      <Menubar.Sub>
        <Menubar.SubTrigger className='group relative flex select-none items-center justify-between rounded px-2.5 py-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-600 data-[disabled]:font-medium data-[disabled]:text-white/30'>
          <span>{label}</span>
          <Icon name='caretRight' className='h-3 w-3' />
        </Menubar.SubTrigger>
        <Menubar.Portal>
          <Menubar.SubContent
            sideOffset={-1}
            className='min-w-[220px] rounded-md border border-white/30 bg-black/20 p-[5px] text-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] backdrop-blur-xl will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]'
          >
            {details?.subContent?.map((item, index) => (
              <>
                {item.isSeperate && <MenuSeparator />}
                <MenuItem
                  key={index}
                  label={item.label}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  details={item.details}
                />
              </>
            ))}
          </Menubar.SubContent>
        </Menubar.Portal>
      </Menubar.Sub>
    </>
  );
};

export default SubMenuItem;
