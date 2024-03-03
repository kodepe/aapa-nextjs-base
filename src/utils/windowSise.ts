import { useState, useEffect } from "react";
import { deviceDetect } from "react-device-detect";
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [device, setDevice] = useState<"isMobile" | "isBrowser" | "">("");
  function handleResize() {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }
  const hanldeDevice = () => {
    const dev = deviceDetect(undefined);
    if (dev.isBrowser) {
      setDevice("isBrowser");
    }
    if (dev.isMobile) {
      setDevice("isMobile");
    }
  };
  useEffect(() => {
    hanldeDevice();
  }, []);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      handleResize();
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      hanldeDevice();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return { windowSize, handleResize, device };
}

export default useWindowSize;
