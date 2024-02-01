import Dock from '../dock';

const Desktop = () => {
  return (
    <main className='relative grid h-screen w-screen grid-cols-96 grid-rows-48 bg-wallpaper bg-cover'>
      {new Array(96 * 48).fill(0).map((_, i) => (
        <svg
          key={i}
          className='flex h-full w-full items-center justify-center border border-white/10'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1 '
        />
      ))}
      <Dock />
    </main>
  );
};

export default Desktop;
