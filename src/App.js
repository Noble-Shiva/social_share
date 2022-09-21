import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
// import { ThemeContext } from './context/themeContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { USER_LOADED } from "./actions/types";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Integrations from "./pages/Integrations";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import Page1 from "./pages/Page1";
import Profile from "./pages/Profile";
import ProfileView from "./pages/ProfileView";
import ShareCard from "./pages/shareCard";
import Signin from "./pages/Signin";
import Splash from "./pages/Splash";
import ScrollToTop from "./utils/ScrollToTop";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  useEffect(() => {
    // check for token in LS when app first runs
    // if (localStorage.token) {
    //   // if there is a token set axios headers for all requests
    //   setAuthToken(localStorage.token);
    // }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    // store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    // window.addEventListener("storage", () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });

    // useEffect(() => {
    if (localStorage.getItem("user")) {
      // setUser(JSON.parse(localStorage.getItem("user")));
      dispatch({
        type: USER_LOADED,
        payload: JSON.parse(localStorage.getItem("user")),
      });
    }
    // }, []);
  }, []);

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
          <Route path="/shareCard" element={<ShareCard />} />
          <Route path="/shareCard/:id" element={<ShareCard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/integrations*" element={<Integrations />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
