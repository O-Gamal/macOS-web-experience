import { useEffect, useState } from 'react';

import HighlightArea from './HighlightArea';

const Desktop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [showHighlightArea, setShowHighlightArea] = useState(true);

  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleMouseUp = () => {
      setIsDragging(false);
      timer = setTimeout(() => {
        setShowHighlightArea(false);
      }, 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setShowHighlightArea(true);
        setEndPoint({ x: e.clientX, y: e.clientY });
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      if (timer) clearTimeout(timer);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPoint({ x: e.clientX, y: e.clientY });
    setEndPoint({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      className='relative h-screen w-screen cursor-default bg-wallpaper bg-cover'
      onContextMenu={() => {
        setIsDragging(false);
      }}
      onMouseDown={handleMouseDown}
    >
      {(isDragging || showHighlightArea) && (
        <HighlightArea
          startPoint={startPoint}
          endPoint={endPoint}
          isDrading={isDragging}
        />
      )}
    </main>
  );
};

export default Desktop;
