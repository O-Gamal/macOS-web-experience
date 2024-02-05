import Icon from '@components/ui/icon/Icon';
import Menu from '@components/ui/menu';

import Battary from './Battary';
import DateAndTime from './DateAndTime';
import menuItemsConfig from './menuItems.config';

const MenuBar = () => {
  return (
    <section className='fixed top-0 w-screen bg-white/90 backdrop-blur-sm'>
      <section className='flex items-center justify-between pl-2 pr-3'>
        <Menu menuItems={menuItemsConfig} />
        <section className='flex items-center gap-3'>
          <Icon name='wifi' className='h-4' />
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
