import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  console.log("Location Change : ", location.pathname);

  useEffect(() => {
    console.log("Scrolling ");
    window.scrollTo(0, 0);
  }, [currentLocation]);

  return null;
};

export default ScrollToTop;
