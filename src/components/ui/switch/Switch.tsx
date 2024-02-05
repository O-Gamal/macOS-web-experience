import * as SwitchComponent from '@radix-ui/react-switch';

import { SwitchProps } from './Switch.types';

const Switch = ({
  label,
  id,
  className,
  checked = false,
  onChange,
  disabled,
}: SwitchProps) => (
  <form className={className}>
    <div className='flex items-center'>
      {label && (
        <label className='pr-[15px] text-[15px] leading-none' htmlFor={id}>
          {label}
        </label>
      )}
      <SwitchComponent.Root
        className='relative h-[24px] w-[42px] cursor-default rounded-full border border-white/10 bg-gray-600 outline-none data-[state=checked]:bg-blue-600'
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
      >
        <SwitchComponent.Thumb className='block h-[20px] w-[20px] translate-x-px rounded-full bg-white transition-transform duration-300 will-change-transform data-[state=checked]:translate-x-[19px]' />
      </SwitchComponent.Root>
    </div>
  </form>
);

export default Switch;
