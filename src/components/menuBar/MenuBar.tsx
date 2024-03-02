import { useState } from 'react';

import Icon from '@components/ui/icon/Icon';
import Menu from '@components/ui/menu';
import CustomMenuItem from '@components/ui/menu/CustomMenuItem';
import MenuItem from '@components/ui/menu/MenuItem';
import MenuSeparator from '@components/ui/menu/MenuSeparator';
import Switch from '@components/ui/switch';

import Battary from './Battary';
import DateAndTime from './DateAndTime';
import menuItemsConfig from './menuItems.config';

const MenuBar = () => {
  const [wifi, setWifi] = useState(false);
  return (
    <section className='fixed top-0 z-50 w-screen cursor-default select-none bg-white/90 backdrop-blur-sm'>
      <section className='flex items-center justify-between pl-2 pr-3'>
        <Menu menuItems={menuItemsConfig} />
        <section className='flex items-center gap-3'>
          <CustomMenuItem
            label={<Icon name='wifi' className='h-4' />}
            align='end'
          >
            <section className='flex flex-col'>
              <section className='flex items-center justify-between gap-2 px-2 py-1'>
                <span className='text-[14px] font-semibold'>Wi-Fi</span>
                <Switch
                  id='wifi'
                  checked={wifi}
                  onChange={() => setWifi((prev) => !prev)}
                />
              </section>
              <section>
                <MenuSeparator />
                <MenuItem
                  label='Wi-Fi Settings...'
                  className=' data-[highlighted]:bg-gray-400/30 '
                />
              </section>
            </section>
          </CustomMenuItem>
          <Battary />
          <Icon name='spotlight' className='h-4' />
          <Icon name='controlCenter' className='h-4' />
          <DateAndTime />
        </section>
      </section>
    </section>
  );
};

export default MenuBar;
