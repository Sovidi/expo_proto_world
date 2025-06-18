import React, { useRef, useState } from "react";

const useScrollCounter = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const scrollCounter = useRef(0);

  const counting = () => {
    scrollCounter.current += 1;
    requestAnimationFrame(() => {
      setIsScrolled(scrollCounter.current);
    });
  };

  return { isScrolled, counting };
};

export default useScrollCounter;
