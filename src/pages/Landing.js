import React from "react";
import Button from "../components/Button";
import { images } from "../constants";
import illustration from "../wfh_1.svg";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
const Landing = () => {
  const steps = [
    {
      title: "Create your Account",
      description: `Start by  
        <a href="/signin" className="text-blue-500 hover:text-blue-700 hover:underline">creating</a>
        your account with social share by providing your details.`,
      img: images.step_1,
      alt: "creating account",
    },
    {
      title: "Link your Social Handles",
      description: `<a href="/profile" className="text-blue-500 hover:text-blue-700 hover:underline">Connect</a>
        your social handles like Facebook, Twitter, Instagram, Snap etc..`,
      img: images.step_2,
      alt: "linking social handles",
    },
    {
      title: "Tap to Share!",
      description: "Start sharing by tapping on the recepient mobile phone.",
      img: images.step_3,
      alt: "tap to share",
    },
  ];
  return (
    <div className="dark:bg-gray-900">
      <div className="h-screen flex flex-col-reverse justify-center items-center max-w-6xl px-6 py-16 md:mt-10 mx-auto md:flex-row">
        <div className="flex flex-col justify-center pr-4 md:w-1/2">
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">
            It was never so easy to Network!
          </h1>
          <p className="mt-6 mb-12 text-lg text-gray-600 dark:text-gray-400">
            Share your social handles on the go, with just a{" "}
            <span className="text-blue-600">Tap!</span>
          </p>
          <div className="flex">
            <Link
              to="/signin"
              className="text-white bg-blue-500 hover:bg-blue-700 px-6 py-3 font-semibold rounded-full transform duration-200 hover:scale-110"
            >
              Create Account
            </Link>
            <a
              className="ml-3 px-6 py-3 font-semibold font-sm text-blue-500 bg-white hover:bg-blue-100 border border-blue-500 rounded-full transform duration-200 hover:scale-110"
              href="#read-more"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full text-blue-500"
            src={images.landing_bg}
            alt="connecting people with social networks"
          />
        </div>
      </div>

      <div id="read-more" className="md:h-screen">
        <div className="max-w-6xl px-6 mx-auto py-16">
          <div className="flex md:items-center flex-col">
            <h1 className="pt-5 text-3xl md:text-center font-extrabold leading-none tracking-tight text-gray-800 lg:text-5xl dark:text-gray-400">
              See how it works
            </h1>
            <span className="bg-blue-600 mt-2 h-1 w-40 rounded-full"></span>
          </div>
          <div className="flex flex-col md:flex-row mt-10">
            <div className="grid gap-8 md:grid-cols-3">
              {steps &&
                steps.map((e, i) =>
                  i == 1 ? (
                    <div className="flex theme-dark">
                      <div className="flex flex-col items-center p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
                        <div className="p-2 rounded-full transform duration-200 hover:scale-110">
                          <img
                            className="w-full text-blue-500"
                            src={e.img}
                            alt={e.alt}
                          />
                        </div>
                        <div className="pb-3">
                          <h3 className="text-2xl font-semibold ">{e.title}</h3>
                          <p className="">{parse(e.description)}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
                      <div className="p-2 rounded-full transform duration-200 hover:scale-110">
                        <img
                          className="w-full text-blue-500"
                          src={e.img}
                          alt={e.alt}
                        />
                      </div>
                      <div className="pb-3">
                        <h3 className="text-2xl font-semibold ">{e.title}</h3>
                        <p className="">{parse(e.description)}</p>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
