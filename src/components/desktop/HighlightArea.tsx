import { cn } from '@utils/className';

type Point = {
  x: number;
  y: number;
};

type HighlightAreaProps = {
  startPoint: Point;
  endPoint: Point;
  isDrading: boolean;
};

const HighlightArea = ({
  startPoint,
  endPoint,
  isDrading,
}: HighlightAreaProps) => {
  const top = startPoint.y > endPoint.y ? endPoint.y : startPoint.y;
  const left = startPoint.x > endPoint.x ? endPoint.x : startPoint.x;

  const widthDif = endPoint.x - startPoint.x;
  const heightDif = endPoint.y - startPoint.y;

  const width = widthDif > 0 ? widthDif : startPoint.x - endPoint.x;
  const height = heightDif > 0 ? heightDif : startPoint.y - endPoint.y;

  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-sm border border-blue-200 bg-white/10 transition-opacity duration-300 ease-out',
        {
          'opacity-0': !isDrading,
        }
      )}
      style={{
        top,
        left,
        width,
        height,
      }}
    />
  );
};

export default HighlightArea;
