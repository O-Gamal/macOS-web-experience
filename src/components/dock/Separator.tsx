const Separator = ({ size = 1 }: { size?: number }) => {
  return (
    <div
      style={{
        height: `${size * 48}px`,
      }}
      className='mx-2 border-r border-white/30'
    ></div>
  );
};

export default Separator;
