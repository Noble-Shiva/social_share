import React from "react";
// import { ThemeContext } from './context/themeContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import Signin from "./pages/Signin";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="h-screen w-full absolute bg-white">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/page" element={<Page />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
