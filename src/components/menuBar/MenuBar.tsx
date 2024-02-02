import Icon from '@components/ui/Icon';

import Battary from './Battary';

const menuItems = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];

const MenuBar = () => {
  return (
    <section className='fixed top-0 h-6 w-screen bg-white/70 backdrop-blur-sm'>
      <section className='flex h-full items-center justify-between px-4'>
        <section className='flex items-center gap-4'>
          <section className='flex items-center gap-5'>
            <Icon name='appleLogo' className='h-5' />
            <button className='text-sm font-bold'>Finder</button>
          </section>
          {menuItems.map((item, index) => (
            <button key={index} className='text-sm'>
              {item}
            </button>
          ))}
        </section>
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
