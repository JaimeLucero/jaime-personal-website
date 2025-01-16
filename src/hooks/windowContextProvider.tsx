import { useState, useEffect } from 'react';

export const useWindowSize = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Ensure we are in the browser and window is available
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1080);
      };

      handleResize(); // Set initial state
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures this only runs once

  return isMobile;
};
