import { useState, useEffect } from "react";

export type UseWindowWidthReturnType = {
  width: number;
  isMobile: boolean;
};

const useWindowWidth = (): UseWindowWidthReturnType => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(width < 769);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(width < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return { width, isMobile };
};

export default useWindowWidth;
