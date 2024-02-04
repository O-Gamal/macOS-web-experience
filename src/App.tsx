import SmallScreenError from '@components/error/SmallScreenError';
import useMediaQuery from '@hooks/useMediaQuery';

import Desktop from './components/desktop/Desktop';

function App() {
  const { isLargeDevice } = useMediaQuery();

  return isLargeDevice ? <Desktop /> : <SmallScreenError />;
}

export default App;
