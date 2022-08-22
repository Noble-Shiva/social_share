import React, { useContext, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { images } from "../constants";
import Otp from "../components/Otp";
import { ThemeContext } from "../context/themeContext";
import { ClassNames } from "../utils/Utils";
import { Link } from "react-router-dom";

const Login = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [currentState, setCurrentState] = useState(0);
  const [showOtp, setshowOtp] = useState(false);
  const [phoneNo, setPhoneNo] = useState();
  const [otp, setOtp] = useState();

  const onSignin = () => {};

  const onOtpCaptured = (otp) => {
    console.log("Entered Otp : ", otp);
    setOtp(otp);
  };

  const getSubmitButtonText = () => {
    if (currentState === 0) {
      return "Request Otp";
    } else if (currentState === 1) {
      return "Verify Otp";
    } else {
      return "Login";
    }
  };

  const onSubmit = () => {
    if (currentState === 0) {
      requestOtp();
    } else if (currentState === 1) {
      verifyOtp();
    } else {
      login();
    }
  };

  const requestOtp = () => {
    console.log("Request Otp");
    setCurrentState(1);
  };

  const verifyOtp = () => {
    console.log("Verify Otp");
  };

  const login = () => {
    console.log("Login");
  };

  const resendCode = () => {
    console.log("Resend Code");
  };

  return (
    <>
      <div className="dark:bg-gray-900">
        <div className="lg:flex">
          <div className="hidden lg:flex items-center justify-center bg-blue-100 flex-1 h-screen">
            <div
              className="transform duration-200 hover:scale-110 cursor-pointer"
              style={{ width: "70%" }}
            >
              <img
                src={images.login}
                className="w-full text-blue-500"
                alt="authentication using otp"
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:max-w-screen-sm h-screen">
            {/* <div className="py-12 bg-blue-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                  <div className="text-2xl text-blue-800 tracking-wide ml-2 font-semibold">
                    blockify
                  </div>
                </div>
              </div> */}
            <div className="mt-10 px-10 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
              <h1 className="text-4xl font-extrabold text-gray-800 lg:text-5xl dark:text-gray-400">
                Hello there!
              </h1>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-800 lg:text-3xl dark:text-gray-400">
                Help us with your phone number
              </h1>
              <div className="mt-16 md:mt-12">
                <div>
                  <div>
                    <div className="text-sm font-bold text-gray-700 dark:text-gray-400 tracking-wide">
                      Phone Number
                    </div>
                    <input
                      className={ClassNames(
                        theme === "dark" ? "px-2 rounded-lg" : "px-0",
                        "mt-2 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      )}
                      type="tel"
                      name="tel"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      placeholder="99999 99999"
                    />
                  </div>
                  {currentState === 1 && (
                    <div className="mt-12">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-bold text-gray-700 dark:text-gray-400 tracking-wide">
                          Enter Otp
                        </div>
                        <div>
                          <button
                            onClick={resendCode}
                            className="text-xs font-display font-semibold text-blue-600 hover:text-blue-800 cursor-pointer"
                          >
                            Resend Code?
                          </button>
                        </div>
                      </div>
                      {/* <input
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      type=""
                      placeholder="Enter your password"
                    /> */}
                      <div className="mt-3">
                        <Otp otp={(e) => onOtpCaptured(e)} />
                      </div>
                    </div>
                  )}
                  <div className="mt-16">
                    <button
                      onClick={onSubmit}
                      className="bg-blue-500 text-gray-100 p-3 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg"
                    >
                      {getSubmitButtonText()}
                    </button>
                  </div>
                </div>
                <div className="mt-5 text-sm font-display font-semibold text-gray-700 dark:text-gray-400 text-center">
                  Don't have an account ?{" "}
                  <Link
                    to="/signin"
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                  >
                    Sign up
                  </Link>
                </div>
                {/* <Otp otp={(e) => console.log("Entered Otp : ", e)} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
