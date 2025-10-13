'use client';
import { useEffect, useState } from "react";

interface StickyState {
  sticky: boolean;
}

const UseSticky = (): StickyState => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { sticky };
};

export default UseSticky;
