import { useEffect, useState } from 'react';

const LARGE_DEVICE = '(min-width: 993px)';
const MEDIUM_DEVICE = '(min-width: 769px)';
const SMALL_DEVICE = '(min-width: 577px)';

const useMediaQuery = () => {
  const [matches, setMatches] = useState(() => ({
    isLargeDevice: window.matchMedia(LARGE_DEVICE).matches,
    isMediumDevice: window.matchMedia(MEDIUM_DEVICE).matches,
    isSmallDevice: window.matchMedia(SMALL_DEVICE).matches,
  }));

  useEffect(() => {
    const largeQuery = window.matchMedia(LARGE_DEVICE);
    const mediumQuery = window.matchMedia(MEDIUM_DEVICE);
    const smallQuery = window.matchMedia(SMALL_DEVICE);

    const updateMatches = () => {
      setMatches({
        isLargeDevice: largeQuery.matches,
        isMediumDevice: mediumQuery.matches,
        isSmallDevice: smallQuery.matches,
      });
    };

    largeQuery.addEventListener('change', updateMatches);
    mediumQuery.addEventListener('change', updateMatches);
    smallQuery.addEventListener('change', updateMatches);

    updateMatches();

    return () => {
      largeQuery.removeEventListener('change', updateMatches);
      mediumQuery.removeEventListener('change', updateMatches);
      smallQuery.removeEventListener('change', updateMatches);
    };
  }, []);

  return matches;
};

export default useMediaQuery;
