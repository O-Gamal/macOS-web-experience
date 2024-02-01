import { useMediaQuery } from '@uidotdev/usehooks';

import Desktop from './components/desktop/Desktop';
import SmallScreenError from './components/error/SmallScreenError';

function App() {
  const isLargeDevice = useMediaQuery('(min-width : 993px)');

  return isLargeDevice ? <Desktop /> : <SmallScreenError />;
}

export default App;
