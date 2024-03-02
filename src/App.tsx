import Dock from '@components/dock';
import SmallScreenError from '@components/error/SmallScreenError';
import MenuBar from '@components/menuBar';
import useMediaQuery from '@hooks/useMediaQuery';

import Desktop from './components/desktop/Desktop';

function App() {
  const { isLargeDevice } = useMediaQuery();

  return isLargeDevice ? (
    <>
      <MenuBar />
      <Desktop />
      <Dock />
    </>
  ) : (
    <SmallScreenError />
  );
}

export default App;
