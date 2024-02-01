// usage
// const is992px = useMediaQuery('(max-width: 992px)')

import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (i.e., if the code is running on the client-side)
    if (typeof window !== "undefined") {
      const queryList = window.matchMedia(query);
      setMatches(queryList.matches);

      const listener = (evt) => setMatches(evt.matches);

      // Add event listener to handle changes in media query matches
      queryList.addEventListener("change", listener);

      // Clean up the listener when component unmounts
      return () => queryList.removeEventListener("change", listener);
    }
  }, [query]); // Re-run effect when query changes

  return matches;
};
