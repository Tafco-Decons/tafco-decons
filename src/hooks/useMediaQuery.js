// usage
// const is992px = useMediaQuery('(max-width: 992px)')

import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatches(queryList.matches);

    const listener = (evt) => setMatches(evt.matches);

    // Modern approach using addEventListener
    queryList.addEventListener("change", listener);

    // Clean up the listener using removeEventListener
    return () => queryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
