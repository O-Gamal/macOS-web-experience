import { AppIconType } from '@assets/appIcons';
import AppIcon from '@components/app/appIcon';

import Separator from './Separator';

const DockApps: {
  name: AppIconType;
  isOpen?: boolean;
}[] = [
  {
    name: 'photos',
    isOpen: true,
  },
  {
    name: 'appStore',
  },
  {
    name: 'music',
  },
  {
    name: 'preview',
  },
  {
    name: 'terminal',
  },
  {
    name: 'slack',
    isOpen: true,
  },
  {
    name: 'vsCode',
    isOpen: true,
  },
  {
    name: 'settings',
  },
  {
    name: 'arc',
    isOpen: true,
  },
  {
    name: 'notion',
    isOpen: true,
  },
  {
    name: 'figma',
    isOpen: true,
  },
  {
    name: 'warp',
  },
];

const Dock = () => {
  return (
    <section className='fixed bottom-2 left-1/2 -translate-x-1/2 rounded-2xl border border-white/30 bg-black/40 p-1.5 pb-2 shadow-2xl backdrop-blur-md '>
      <section className='flex w-full items-center gap-0.5'>
        {DockApps.map((app) => (
          <AppIcon
            key={app.name}
            name={app.name}
            isOpen={app.isOpen}
            size={1}
          />
        ))}
        <Separator size={1} />
        <AppIcon name='trash' size={0.9} />
      </section>
    </section>
  );
};

export default Dock;
