'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  // The first client render must match the static export; sync after hydration.
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // Sync in case value changed between SSR and hydration
    setMatches(media.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)');
}

export function useIsTablet(): boolean {
  return useMediaQuery('(max-width: 1024px)');
}
