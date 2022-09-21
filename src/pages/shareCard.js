import { PhoneIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import AddHandle from "../components/AddHandle";
import Button from "../components/Button";
import { images } from "../constants";
import { getUserDetails } from "../services/auth";
import { getSocialHandles } from "../services/socialHandles";

const ShareCard = () => {
  const [user, setUser] = useState({});
  const name = "Shiva";

  const params = useParams();

  console.log("Route Params : ", params);

  const getUser = async () => {
    const user = await getUserDetails(params?.id);
    setUser(user);
    await getSocialHandles(user.uid);
  };

  // if (params && params.id) {
  //   getUser();
  // }

  useEffect(() => {
    getUser();
  }, [params]);

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mt-5 md:mt-10 px-6 py-16 mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* <div className="mt-10 sm:mt-0 flex flex-col justify-center pr-4"> */}
            <div className="flex w-full">
              <div className="flex w-full mt-6 lg:mt-8">
                <div className="w-full shadow-lg hover:shadow-xl rounded-lg bg-white">
                  <div className="w-full h-48 bg-cover rounded-t-lg cover_bg bg-center"></div>
                  <div className="ml-8 -mt-20">
                    {user?.profilePictureUrl == null ? (
                      <div className="profile_bg w-32 h-32 bg-cover rounded-full border-2 border-gray-700"></div>
                    ) : (
                      <div className="flex items-center w-32 h-32 bg-cover rounded-full">
                        <img
                          className="w-32 h-32 bg-cover rounded-full"
                          src={user?.profilePictureUrl}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-6 -mt-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-2xl font-bold">{user.name}</p>
                        <p className="text-xs text-gray-500">{user?.bio}</p>
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
                      {user?.bioFull}
                    </div>
                    <div className="mt-2 text-gray-900 text-sm">
                      {user?.skills}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
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
          <section className="flex items-center justify-center md:mt-16 py-16">
            <div className="mx-auto">
              <div className="flex flex-col items-start justify-between lg:flex-row">
                <div className="px-2 flex flex-col items-start justify-center w-full h-full pr-8 mb-5 lg:mb-0 lg:w-1/2">
                  {/* <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">
                  Our customers love our product
                </p> */}
                  <h2 className="text-3xl font-extrabold leading-10 text-gray-800 dark:text-gray-400 sm:text-5xl sm:leading-none md:text-3xl lg:text-4xl xl:text-5xl">
                    Social Handles!
                  </h2>
                  <p className="my-6 text-lg text-gray-600">
                    View any handle(s) by just tapping on the card
                  </p>
                  {/* <button className="text-white bg-blue-500 hover:bg-blue-700 border border-transparent px-5 py-2 font-sm focus:outline-none rounded-full">
                    Add New Handle
                  </button> */}
                </div>
                <div className="w-full lg:w-2/3 mt-0">
                  <div className="w-full md:border-4 md:border-dashed md:border-gray-200 md:rounded-lg md:p-5">
                    <div className="flex items-center justify-start mb-3 p-3 px-5 bg-white rounded-lg shadow">
                      <img
                        className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full"
                        src={images.twitter_gif}
                        alt=""
                      />
                      <div className="ml-5 flex flex-col">
                        <div className="relative">
                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        </div>
                        <h3 className="mt-3 text-sm font-medium text-blue-500 truncate">
                          twitter
                          {/* <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                            - CEO SomeCompany
                          </span> */}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3 p-3 px-5 bg-white rounded-lg shadow">
                      <img
                        className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full"
                        src={images.facebook_gif}
                        alt=""
                      />
                      <div className="ml-5 flex flex-col">
                        <div className="relative">
                          <p className="mt-2 text-sm text-gray-600">
                            I can't express enough, how amazing this service has
                            been for my company.
                          </p>
                        </div>
                        <h3 className="mt-3 text-sm font-medium text-blue-600 truncate">
                          facebook
                          {/* <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                            - CEO SomeCompany
                          </span> */}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3 p-3 px-5 bg-white rounded-lg shadow">
                      <img
                        className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full"
                        src={images.instagram_gif}
                        alt=""
                      />
                      <div className="ml-5 flex flex-col">
                        <div className="relative">
                          <p className="mt-2 text-sm text-gray-600">
                            I can't express enough, how amazing this service has
                            been for my company.
                          </p>
                        </div>
                        <h3 className="mt-3 text-sm font-medium text-orange-500 truncate">
                          Instagram
                          {/* <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                            - CEO SomeCompany
                          </span> */}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ShareCard;
