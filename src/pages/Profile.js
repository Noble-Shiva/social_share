import React from "react";
import Button from "../components/Button";
import { images } from "../constants";

const Profile = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col max-w-6xl h-screen px-6 py-16 mx-auto md:flex-row">
        <div className="mt-10 sm:mt-0 flex flex-col justify-center pr-4">
          <div class="bg-white rounded-xl shadow-lg border border-gray-200 bg-white">
            <div className="">
              <img
                src={images.cover_bg}
                className="rounded-t-xl object-contain"
                alt="profile_bg"
              />
            </div>
            <div class="px-8 py-6 relative flex flex-col md:flex-row justify-center">
              <div class="absolute md:relative top-0 left-0 ml-8 md:mx-auto transform -translate-y-1/2 bg-white rounded-full border border-blue-500">
                <img
                  src={images.profile_bg}
                  className="rounded-full object-cover w-32 h-32"
                  alt="profile_bg"
                />
              </div>
              <div class="ml-20 md:mt-10 text-sm">
                <span class="text-gray-500 font-semibold">From</span> Feb 08{" "}
                <span class="text-gray-500 font-semibold">To</span> Feb 14
              </div>
              <div class="">
                <div class="uppercase font-bold text-gray-600">
                  Your Coupon Code
                </div>
                <div class="uppercase mt-2 text-indigo-500 font-black text-2xl leading-none">
                  TailwindCSS2020
                </div>
              </div>
              <div class="text-gray-500 text-sm">
                Coupon only valid on select UI Components &amp; once per user
              </div>
            </div>
            <div className="bg-purple-100 h-40 rounded-b-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
