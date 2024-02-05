import icons, { IconType } from '@assets/icons';

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconType;
  className?: string;
};

const Icon = ({ name, className, ...rest }: IconProps) => {
  const SelectedIcon = icons[name] as JSX.ElementType;
  return <SelectedIcon className={className} {...rest} />;
};

export default Icon;
