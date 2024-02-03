import { FontFaceType } from '../types';
import BOLD_WOFF from './bold/bold.woff';
import BOLD_WOFF2 from './bold/bold.woff2';
import LIGHT_WOFF from './light/light.woff';
import LIGHT_WOFF2 from './light/light.woff2';
import MEDIUM_WOFF from './medium/medium.woff';
import MEDIUM_WOFF2 from './medium/medium.woff2';
import REGULAR_WOFF from './regular/regular.woff';
import REGULAR_WOFF2 from './regular/regular.woff2';
import SEMIBOLD_WOFF from './semi-bold/semi-bold.woff';
import SEMIBOLD_WOFF2 from './semi-bold/semi-bold.woff2';

const OpenSansFont: FontFaceType = {
  name: 'IBMPlex-sans-arabic',
  weights: [
    {
      weightName: 'light',
      woff: LIGHT_WOFF,
      woff2: LIGHT_WOFF2,
      weight: 300,
    },
    {
      weightName: 'regular',
      woff: REGULAR_WOFF,
      woff2: REGULAR_WOFF2,
      weight: 400,
    },
    {
      weightName: 'medium',
      woff: MEDIUM_WOFF,
      woff2: MEDIUM_WOFF2,
      weight: 500,
    },
    {
      weightName: 'semiBold',
      woff: SEMIBOLD_WOFF,
      woff2: SEMIBOLD_WOFF2,
      weight: 600,
    },
    {
      weightName: 'bold',
      woff: BOLD_WOFF,
      woff2: BOLD_WOFF2,
      weight: 700,
    },
  ],
};

export default OpenSansFont;
