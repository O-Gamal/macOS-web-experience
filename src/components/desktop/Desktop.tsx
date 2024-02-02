import MenuBar from '@components/menuBar';

import Dock from '../dock';

const Desktop = () => {
  return (
    <main className='relative grid h-screen w-screen grid-cols-96 grid-rows-48 bg-wallpaper bg-cover'>
      <MenuBar />
      <Dock />
    </main>
  );
};

export default Desktop;
