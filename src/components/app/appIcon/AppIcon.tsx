import appIcons, { AppIconType } from '@assets/appIcons';

type AppIconProps = {
  name: AppIconType;
  size?: number;
  isOpen?: boolean;
};

const AppIcon = ({ name, size = 1, isOpen = false }: AppIconProps) => {
  return (
    <div className='relative '>
      <img
        src={appIcons[name]}
        alt={name}
        style={{ width: `${size * 50}px` }}
      />
      {isOpen && (
        <div className='absolute -bottom-1 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white' />
      )}
    </div>
  );
};

export default AppIcon;
