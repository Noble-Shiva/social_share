import React, { useContext } from "react";
import Button from "../components/Button";
import { images } from "../constants";
import { ThemeContext } from "../context/themeContext";

import illustration from "./../wfh_1.svg";

const Page = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark:bg-gray-900">
      <div className="h-screen flex flex-col-reverse max-w-6xl px-6 py-16 mt-10 mx-auto md:flex-row">
        <div className="flex flex-col justify-center pr-4 md:w-1/2">
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">
            It was never so easy to Network!
          </h1>
          <p className="mt-6 mb-12 text-lg text-gray-700 dark:text-gray-400">
            Share your social handles on the go, with just a{" "}
            <span className="text-orange-600">Tap!</span>
          </p>
          <div>
            <a
              className="px-6 py-3 font-semibold text-orange-100 bg-orange-600 rounded-full"
              href="#read-more"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full"
            src={images.landing_bg}
            alt="Woman working from home"
          />
        </div>
      </div>

      <div id="read-more">
        <div className="flex flex-col max-w-6xl px-6 mx-auto mb-16 md:flex-row">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
              <div className="p-2 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold ">Start where you are</h3>
                <p className="">
                  No new syntax or configuration. Start with one property.
                </p>
              </div>
            </div>
            <div className="flex theme-dark">
              <div className="flex items-center w-full p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
                <div className="p-2 rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">This is dark!</h3>
                  <p className="">
                    You can apply themes to every element, inside themes!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
              <div className="p-2 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold ">See the code</h3>
                <p>
                  <a
                    className="text-blue-600 dark:text-blue-300"
                    href="https://github.com/estevanmaito/tailwindcss-multi-theme/tree/master/examples/simple"
                  >
                    The code
                  </a>{" "}
                  for this example is available for you to copy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p className="font-medium text-blue-500 uppercase">
                Building Businesses
              </p>
              <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Changing The Way People Do Business.
              </h2>
              <p className="text-xl text-gray-600 md:pr-16">
                Learn how to engage with your visitors and teach them about your
                mission. We're revolutionizing the way customers and businesses
                interact.
              </p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">
                  Sign in to your Account
                </h3>
                <input
                  type="text"
                  name="email"
                  className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  name="password"
                  className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Password"
                />
                <div className="block">
                  <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">
                    Log Me In
                  </button>
                </div>
                <p className="w-full mt-4 text-sm text-center text-gray-500">
                  Don't have an account?{" "}
                  <a href="#_" className="text-blue-500 underline">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
