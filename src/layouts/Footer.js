import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  if (currentLocation === "/signin" || currentLocation === "/login") {
    return null;
  }

  return (
    // <div class="pt-8 bg-blue-900 md:pt-20">
    //   <div class="container m-auto px-6 space-y-8 text-gray-400 md:px-12 lg:px-20">
    //     <div>
    //       <div class="mb-6 gap-6 items-center justify-between py-6 sm:flex md:mb-16 md:py-0 md:space-y-6">
    //         <img
    //           width="100"
    //           height="42"
    //           src="images/logo.svg"
    //           alt="logo tailus"
    //           class="w-32"
    //         />
    //         <div class="flex flex-wrap flex-col-reverse gap-6 mt-6 sm:flex-row sm:mt-0 sm:items-center">
    //           <select
    //             name="langage"
    //             id="langae"
    //             class="px-4 py-2 w-full rounded-xl bg-gray-900 sm:w-max"
    //           >
    //             <option value="en">English</option>
    //             <option value="hi">Hindi</option>
    //             <option value="kn">Kannada</option>
    //           </select>
    //           <div class="flex gap-6">
    //             <a
    //               href="#"
    //               target="blank"
    //               aria-label="github"
    //               class="hover:text-cyan-400"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="20"
    //                 height="20"
    //                 fill="currentColor"
    //                 class="bi bi-github"
    //                 viewBox="0 0 16 16"
    //               >
    //                 <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    //               </svg>
    //             </a>
    //             <a
    //               href="#"
    //               target="blank"
    //               aria-label="twitter"
    //               class="hover:text-cyan-400"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="20"
    //                 height="20"
    //                 fill="currentColor"
    //                 class="bi bi-twitter"
    //                 viewBox="0 0 16 16"
    //               >
    //                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
    //               </svg>
    //             </a>
    //             <a
    //               href="#"
    //               target="blank"
    //               aria-label="medium"
    //               class="hover:text-cyan-400"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="20"
    //                 height="20"
    //                 fill="currentColor"
    //                 class="bi bi-medium"
    //                 viewBox="0 0 16 16"
    //               >
    //                 <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
    //               </svg>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <div class="pb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
    //           <div>
    //             <h6 class="text-lg font-medium text-white">Categories</h6>
    //             <ul class="list-inside mt-4 space-y-4">
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   About
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Customers
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Enterprise
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Partners
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Jobs
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div>
    //             <h6 class="text-lg font-medium text-white">Products</h6>
    //             <ul class="list-inside mt-4 space-y-4">
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   About
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Customers
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Enterprise
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Partners
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Jobs
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div>
    //             <h6 class="text-lg font-medium text-white">Ressources</h6>
    //             <ul class="list-inside mt-4 space-y-4">
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   About
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Customers
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Enterprise
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Partners
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="hover:text-cyan-400 transition">
    //                   Jobs
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div class="col-span-2 sm:col-span-3 md:col-span-2">
    //             <h6 class="text-lg font-medium text-white">Contact</h6>
    //             <ul class="list-inside mt-4 space-y-4">
    //               <li>
    //                 <a
    //                   href="tel:+243996660436"
    //                   class="hover:text-cyan-400 transition"
    //                 >
    //                   +243 996 660 436
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href="mailto:meschacirung@gmail.com"
    //                   class="hover:text-cyan-400 transition"
    //                 >
    //                   contact@tailus.com
    //                 </a>
    //               </li>
    //               <li>
    //                 <form action="">
    //                   <label for="newsletter" class="text-lg text-white">
    //                     Subscribe to our newsletter
    //                   </label>
    //                   <div class="relative mt-4">
    //                     <input
    //                       type="email"
    //                       name="newsletter"
    //                       id="newsletter"
    //                       placeholder="Your email"
    //                       class="w-full px-4 py-3 ring-1 ring-cyan-700 rounded-xl bg-gray-900 bg-opacity-20 invalid:ring-red-400 invalid:outline-none"
    //                     />
    //                     <button
    //                       type="submit"
    //                       title="Submit"
    //                       class="absolute right-0 w-max py-3 px-6 text-center rounded-r-xl transition bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-600 focus:bg-cyan-300"
    //                     >
    //                       <span class="text-gray-900 font-semibold">Send</span>
    //                     </button>
    //                   </div>
    //                 </form>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div class="py-8 border-t border-cyan-800 text-gray-200 flex justify-between">
    //           <span>&copy; SocialShare 2022</span>
    //           <span>All right reserved</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="w-full py-16 bg-blue-900">
      <div class="md:px-12 lg:px-28">
        <div class="container m-auto space-y-6 text-gray-600">
          <img src="images/logo.svg" alt="logo tailus" class="w-40 m-auto" />
          <ul
            role="list"
            class="py-4 flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-8"
          >
            <li role="listitem">
              <a href="#" class="hover:text-blue-500 text-white">
                Home
              </a>
            </li>
            <li role="listitem">
              <a href="#" class="hover:text-blue-500 text-white">
                Features
              </a>
            </li>
            <li role="listitem">
              <a href="#" class="hover:text-blue-500 text-white">
                Get started
              </a>
            </li>
            <li role="listitem">
              <a href="#" class="hover:text-blue-500 text-white">
                About us
              </a>
            </li>
          </ul>
          <div class="w-40 m-auto flex items-center justify-between space-x-4">
            <a href="tel:+243996660436" aria-label="call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5 m-auto text-white hover:text-blue-500"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                ></path>
              </svg>
            </a>
            <a href="mailto:hello@mail.com" aria-label="send mail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5 m-auto text-white hover:text-blue-500"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
              </svg>
            </a>
            <a href="#" title="facebook" target="blank" aria-label="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5 m-auto text-white hover:text-blue-500"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </a>
            <a href="#" title="linkedin" target="blank" aria-label="linkedin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5 m-auto text-white hover:text-blue-500"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
          </div>

          <div class="text-center">
            <span class="text-sm tracking-wider text-white">
              Copyright © SocialShare <span id="year"></span> | All right
              reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
