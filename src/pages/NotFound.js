import React from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";

const NotFound = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="h-screen flex flex-col-reverse justify-center items-center max-w-6xl px-6 py-16 mt-10 mx-auto md:flex-row">
        <div className="flex flex-col justify-center pr-4 md:w-1/2">
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">
            Oops!
          </h1>
          <p className="mt-6 mb-12 text-lg text-gray-700 dark:text-gray-400">
            Looks like you have entered an un-known territory.
          </p>
          <div className="flex">
            <Link
              to="/"
              className="text-white bg-blue-500 hover:bg-blue-700 px-6 py-3 font-semibold rounded-full"
            >
              Go Home
            </Link>
            {/* <a
              className="ml-3 px-6 py-3 font-semibold font-sm text-blue-500 bg-white hover:bg-blue-100 border border-blue-500 rounded-full"
              href="#read-more"
            >
              Read more
            </a> */}
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full text-blue-500"
            src={images.not_found}
            alt="connecting people with social networks"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
