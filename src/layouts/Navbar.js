import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { ThemeContext } from "../context/themeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const location = useLocation();
  const currentLocation = location.pathname;

  const { user } = useSelector((state) => state.auth);

  if (currentLocation === "/signin" || currentLocation === "/login") {
    return null;
  }

  return (
    <div className="fixed t-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg dark:border-none">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="flex items-center justify-between h-16 max-w-6xl px-6 mx-auto">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 font-bold tracking-tight uppercase"
          >
            Logo
          </Link>
          <ul
            className="flex items-center space-x-8 font-semibold"
            role="navigation"
          >
            <li>
              <Link
                to="/"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 font-bold tracking-tight"
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => toggleTheme()}
                className="p-2 rounded focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg
                    className="w-5 h-5"
                    aria-label="Apply light theme"
                    role="image"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    aria-label="Apply dark theme"
                    role="image"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
            </li>
            <li>
              {/* <Button title={"Login"} /> */}
              {user ? (
                <Link to="/profile">
                  <img
                    className="w-10 h-10 bg-cover rounded-full"
                    src={user?.profilePictureUrl}
                    alt=""
                  />
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-white bg-blue-500 hover:bg-blue-700 border border-transparent m-2 px-4 py-2 font-sm focus:outline-none rounded-full"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
