import React, { useRef, useState } from "react";

const useScrollScanner = () => {
  const [scrollScanner, setScrollScanner] = useState(0);
  const scrollCounter = useRef(0);

  const counting = () => {
    scrollCounter.current += 1;
    setScrollScanner(scrollCounter.current);
  };

  return { scrollScanner, counting };
};

export default useScrollScanner;
