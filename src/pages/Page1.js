import React from "react";
import { images } from "../constants";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white">
          <div className="mt-10 mx-auto max-w-6xl px-4 mt-20 sm:px-6 md:mt-20 lg:mt-32 xl:mt-32">
            <div className="text-center">
              <div className="w-full flex flex-col-reverse md:flex md:flex-row-reverse items-center">
                <div className="w-full mt-5 px-3 md:px-0 md:ml-5 md:w-2/3">
                  <div className="text-3xl tracking-tight text-left font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                      Let our{" "}
                      <span className="text-purple-500">
                        food technologists
                      </span>{" "}
                      and{" "}
                      <span className="text-purple-500">
                        regulatory experts
                      </span>{" "}
                      manage your FSSAI Compliance!
                    </h2>
                  </div>
                  <p className="mt-3 text-base text-left tracking-wider text-gray-700">
                    Our team of experts in food safety and standards will help
                    you understand FSSAI regulations which includes how to apply
                    for a new licence application, how to renew licence, how to
                    modify licence, how to file annual return etc.
                  </p>
                </div>
                <div className="w-full mt-10 mb-5 md:w-1/3">
                  <img
                    className="h-40 mx-auto object-contain md:h-96 lg:w-full lg:h-full"
                    src={images.landing_bg}
                    alt=""
                  />
                </div>
              </div>

              <hr className="mt-10" />

              <div className="px-4 lg:px-8 font-medium">
                <div className="text-left text-teal-900 bg-teal-200 p-5 shadow rounded-lg">
                  <p>
                    <span>* Govt fees - not included, </span>
                    <Link
                      to="/serviceplandetails"
                      className="mt-2 py-3 font-semibold text-purple-500 text-md hover:text-purple-700 group-hover:text-white"
                    >
                      click here
                    </Link>
                    <span> to check applicable govt fees</span>
                  </p>
                  <p className="mt-3">
                    ** Final price may vary depending on the complexity (Total
                    number of products, kind of business, food product category
                    etc)
                  </p>
                </div>
              </div>

              <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    {/* <h2 className="text-base text-purple-500 font-semibold tracking-wide uppercase">Transactions</h2> */}
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                      Food technologists & FSSAI regulatory experts assisting
                      you with{" "}
                      <span className="text-purple-500 font-extrabold">
                        100% compliance!
                      </span>
                    </p>
                    {/* <p className="mt-4 max-w-2xl text-xl tracking-wide text-gray-700 lg:mx-auto">
                                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                                            accusamus quisquam.
                                        </p> */}
                  </div>

                  <div className="mt-10">jkasdfajs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg bg-gray-200" />
    </>
  );
};

export default Page1;
