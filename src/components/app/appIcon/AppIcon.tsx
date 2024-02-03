import { useRef } from 'react';

import appIcons, { AppIconType } from '@assets/appIcons';
import Tooltip from '@components/ui/Tooltip';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

type AppIconProps = {
  name: AppIconType;
  size?: number;
  isOpen?: boolean;
  mouseX: MotionValue<number>;
};

const AppIcon = ({ name, isOpen = false, mouseX }: AppIconProps) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (value) => {
    const bound = iconRef.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return value - (bound?.x + bound?.width / 2);
  });
  const widthSync = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const width = useSpring(widthSync, {
    damping: 20,
    mass: 0.3,
    stiffness: 400,
  });

  return (
    <motion.div ref={iconRef} className='relative' style={{ width }}>
      <Tooltip content={name}>
        <img src={appIcons[name]} alt={name} />
      </Tooltip>
      {isOpen && (
        <div className='absolute -bottom-1 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white' />
      )}
    </motion.div>
  );
};

export default AppIcon;
