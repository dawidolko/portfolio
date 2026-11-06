import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/*
 * Only route changes scroll. The page is readable before it hydrates, so a
 * jump on mount would pull back a visitor who has already started scrolling.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  const shown = useRef(pathname);
  useEffect(() => {
    if (shown.current === pathname) return;
    shown.current = pathname;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
