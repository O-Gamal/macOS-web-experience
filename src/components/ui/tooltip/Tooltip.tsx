import * as TooltipComponent from '@radix-ui/react-tooltip';
import { cn } from '@utils/className';

type TooltipProps = {
  className?: string;
  children: React.ReactNode;
  content: React.ReactNode;
  delayDuration?: number;
};
const Tooltip = ({
  children,
  content,
  className,
  delayDuration = 0,
}: TooltipProps) => {
  return (
    <TooltipComponent.Provider delayDuration={delayDuration}>
      <TooltipComponent.Root>
        <TooltipComponent.Trigger asChild>{children}</TooltipComponent.Trigger>
        <TooltipComponent.Portal>
          <TooltipComponent.Content
            className={cn(
              'select-none rounded-md bg-zinc-800/90 px-3 py-2 text-sm font-light leading-none text-white shadow ring-1 ring-zinc-600',
              className
            )}
            sideOffset={5}
          >
            {content}
            <TooltipComponent.Arrow className='w-4 fill-zinc-800/90' />
          </TooltipComponent.Content>
        </TooltipComponent.Portal>
      </TooltipComponent.Root>
    </TooltipComponent.Provider>
  );
};

export default Tooltip;
