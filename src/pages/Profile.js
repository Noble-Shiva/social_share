import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";
import Button from "../components/Button";
import { images } from "../constants";

const Profile = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col max-w-6xl px-6 py-16 mx-auto md:flex-row">
        {/* <div className="mt-10 sm:mt-0 flex flex-col justify-center pr-4"> */}
        <div className="flex w-full">
          <div className="flex w-full mt-6 lg:mt-8 xl:mr-8">
            <div className="w-full shadow-lg hover:shadow-xl rounded-lg bg-white">
              <div className="w-full h-48 bg-cover rounded-t-lg cover_bg bg-center"></div>
              <div className="ml-8 -mt-20">
                <div
                  className="w-32 h-32 bg-cover rounded-full border-2 border-gray-700"
                  alt=""
                  style={{
                    backgroundImage: `url(
                      "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                    )`,
                  }}
                ></div>
              </div>
              <div className="p-6 -mt-2">
                <div className="flex justify-between">
                  <div>
                    <p className="text-2xl font-bold">Jeremy Daer</p>
                    <p className="text-xs text-gray-500">
                      Senior Software Engineer
                    </p>
                  </div>
                  <a
                    href="tel:+91 9036360233"
                    className="text-white bg-blue-500 hover:bg-blue-700 border border-transparent m-2 px-5 py-2 font-sm focus:outline-none rounded-full"
                  >
                    <span className="flex flex-row justify-center items-center">
                      <PhoneIcon className="text-white w-4 mr-2"></PhoneIcon>
                      Call
                    </span>
                  </a>
                </div>
                <div className="mt-5 text-lg font-bold">
                  Tips for creating an amazing design system
                </div>
                <div className="mt-2 text-gray-900 text-sm">
                  Learn how to create a new design system that is beautiful and
                  efficient for creating your UI components.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="flex flex-col items-center mt-6 lg:mt-8">
          <div className="flex-1 flex w-full">
            <div className="w-full p-8 shadow-lg hover:shadow-xl rounded-lg bg-white">
              <div className="flex items-center">
                <div
                  className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
                  alt=""
                  style={{
                    backgroundImage: `url(
                      "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                    )`,
                  }}
                ></div>
                <div className="ml-4">
                  <div className="font-bold text-gray-800">Jeremy Daer</div>
                  <div className="text-xs text-gray-500">Hired 2 Days ago</div>
                </div>
              </div>
              <div className="mt-5 text-lg font-bold text-gray-700 leading-tight">
                Junior Designer - Figma
              </div>
              <div>
                <div className="flex justify-between mt-6 text-xs font-bold">
                  <div className="flex items-start">
                    <svg
                      className="text-gray-400 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="ml-1 text-gray-500">San Francisco</span>
                  </div>

                  <div className="flex items-start ml-4">
                    <svg
                      className="text-gray-400 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        xmlns="http://www.w3.org/2000/svg"
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      />
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                      />
                    </svg>
                    <span className="ml-1 text-gray-500">AirBnB (1 Years)</span>
                  </div>
                </div>
                <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                    Part Time
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
                    Remote
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                    2 Years Exp
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                    $20/Hr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white rounded-xl shadow-lg border border-gray-200 bg-white">
            <div className="h-20">
              <img
                src={images.bg_1}
                className="rounded-t-xl object-contain"
                alt="profile_bg"
              />
            </div>
            <div className="px-8 py-6 relative flex flex-col md:flex-row justify-center">
              <div className="absolute md:relative top-0 left-0 ml-8 md:mx-auto transform -translate-y-1/2 bg-white rounded-full border border-blue-500">
                <img
                  src={images.profile_bg}
                  className="rounded-full object-cover w-32 h-32"
                  alt="profile_bg"
                />
              </div>
              <div className="ml-20 md:mt-10 text-sm">
                <span className="text-gray-500 font-semibold">From</span> Feb 08{" "}
                <span className="text-gray-500 font-semibold">To</span> Feb 14
              </div>
              <div className="">
                <div className="uppercase font-bold text-gray-600">
                  Your Coupon Code
                </div>
                <div className="uppercase mt-2 text-indigo-500 font-black text-2xl leading-none">
                  TailwindCSS2020
                </div>
              </div>
              <div className="text-gray-500 text-sm">
                Coupon only valid on select UI Components &amp; once per user
              </div>
            </div>
            <div className="bg-purple-100 h-40 rounded-b-xl"></div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Profile;
