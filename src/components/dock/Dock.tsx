import { AppIconType } from '@assets/appIcons';
import AppIcon from '@components/app/appIcon';
import { useMotionValue } from 'framer-motion';

import Separator from './Separator';

const DockApps: {
  name: AppIconType | 'seperator';
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
  {
    name: 'seperator',
  },
  {
    name: 'trash',
  },
];

const Dock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <section
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
      className='fixed bottom-2 left-1/2 flex h-16 -translate-x-1/2 items-end gap-0.5 rounded-2xl border border-white/30 bg-black/40 p-1.5 pb-2 shadow-2xl backdrop-blur-md '
    >
      {DockApps.map((app) =>
        app.name === 'seperator' ? (
          <Separator key={app.name} size={1} />
        ) : (
          <AppIcon
            mouseX={mouseX}
            key={app.name}
            name={app.name}
            isOpen={app.isOpen}
          />
        )
      )}
    </section>
  );
};

export default Dock;
