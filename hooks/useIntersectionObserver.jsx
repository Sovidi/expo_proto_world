import React, { useRef, useState } from "react";
import { findNodeHandle, UIManager, useWindowDimensions } from "react-native";

const useScannerView = () => {
  const [isViewed, setIsViewed] = useState(false);
  const targetRef = useRef(null);
  const { height: screenHeight } = useWindowDimensions();

  const handleScroll = () => {
    if (!targetRef.current) return;

    const viewedNode = findNodeHandle(targetRef.current);
    if (!viewedNode) return;

    UIManager.measureInWindow(viewedNode, (x, y, width, height) => {
      const isOnScreen = y + height > 0 && y < screenHeight;

      setIsViewed((prev) => {
        if (prev !== isOnScreen) return isOnScreen;
        return prev;
      });
    });
  };

  return { targetRef, isViewed, handleScroll };
};

export default useScannerView;
