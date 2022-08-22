import React from "react";
// import { ThemeContext } from './context/themeContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import Page1 from "./pages/Page1";
import Profile from "./pages/Profile";
import ProfileView from "./pages/ProfileView";
import Signin from "./pages/Signin";
import Splash from "./pages/Splash";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="h-screen w-full absolute bg-white dark:bg-gray-900">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/splash" element={<Splash />} />
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/share" element={<ProfileView />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
