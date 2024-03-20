import AppleLogo from './AppleLogo';
import CaretRight from './CaretRight';
import ControlCenter from './ControlCenter';
import Spotlight from './Spotlight';
import Wifi from './Wifi';

const icons = {
  appleLogo: AppleLogo,
  controlCenter: ControlCenter,
  spotlight: Spotlight,
  wifi: Wifi,
  caretRight: CaretRight,
};

export default icons;
export type IconType = keyof typeof icons;
