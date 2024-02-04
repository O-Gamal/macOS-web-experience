import Icon from '@components/ui/Icon';
import Menu from '@components/ui/menu';

import Battary from './Battary';
import menuItemsConfig from './menuItems.config';

// const menuItems = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];

const MenuBar = () => {
  return (
    <section className='fixed top-0 w-screen bg-white/90 backdrop-blur-sm'>
      <section className='flex items-center justify-between px-4'>
        <Menu menuItems={menuItemsConfig} />
        <section className='flex items-center gap-3'>
          <Icon name='wifi' className='h-4' />
          <Battary />
          <Icon name='spotlight' className='h-4' />
          <Icon name='controlCenter' className='h-4' />
          <section className='flex items-center gap-2'>
            <span className='text-sm'>Fri 2 Feb</span>
            <span className='text-sm'>11:07 PM</span>
          </section>
        </section>
      </section>
    </section>
  );
};

export default MenuBar;
