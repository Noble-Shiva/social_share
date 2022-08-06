import React from "react";
import { Link } from "react-router-dom";

const ProfileView = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div className="mt-10 mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <p className="block xl:inline">
                Having trouble in managing your FSSAI Compliance?{" "}
              </p>{" "}
              <p className="block text-purple-600 xl:inline">
                Introducing aahar.consulting!
              </p>
            </div>
            <p className="mt-3 tracking-wide text-gray-700 sm:mt-5 sm:text-md sm:mx-auto md:mt-6 md:text-lg lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <p className="block xl:inline">
                Having trouble in managing your FSSAI Compliance?{" "}
              </p>{" "}
              <p className="block text-purple-600 xl:inline">
                Introducing aahar.consulting!
              </p>
            </div>
            <p className="mt-3 tracking-wide text-gray-700 sm:mt-5 sm:text-md sm:mx-auto md:mt-6 md:text-lg lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <div className="font-medium leading-7 text-center space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:space-y-0">
                <div className="text-teal-900 bg-teal-200 py-3 px-6 rounded">
                <p>Hello, you! 👋</p>
                </div>
                <div className="text-purple-900 bg-purple-200 py-3 px-6 rounded">
                <p>Here is a 🎁</p>
                </div>
                <div className="text-green-900 bg-green-200 py-3 px-6 rounded">
                <p>Tailwind starter 🎉</p>
                </div>
            </div>
            </div> */}
    </div>
  );
};

export default ProfileView;
