import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import React from "react";
import { images } from "../constants";

const Integrations = () => {
  const handles = [
    {
      name: "twitter",
      img: images.twitter,
    },
    {
      name: "facebook",
      img: images.facebook,
    },
    {
      name: "instagram",
      img: images.instagram,
    },
    {
      name: "snapchat",
      img: images.snapchat,
    },
    {
      name: "linkedin",
      img: images.linkedin,
    },
    {
      name: "github",
      img: images.github,
    },
    {
      name: "dribbble",
      img: images.dribbble,
    },
  ];

  const connectHandle = (e) => {
    console.log("Connect Handle : ", e);
  };

  return (
    <section className="w-full overflow-hidden bg-white relative">
      <div className="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
      <div className="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] -skew-x-12 left-0 top-0"></div>
      <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-center sm:items-center justify-center">
        <h2 className="text-gray-900 text-center text-2xl md:text-3xl font-bold">
          Connect your Social Handles
        </h2>
        <p className="text-gray-600 text-sm sm:text-lg text-center sm:max-w-lg mt-5">
          We have built integrations to work seemlessly with SocialShare. This
          means that you can connect yuor profile with thousands of other
          popular Social Handles
        </p>
        <a
          href="#_"
          className="group text-center transform text-indigo-500 font-bold text-lg mt-5 flex items-center group"
        >
          <span>A few of them are</span>
          <ArrowCircleDownIcon className="ml-5 w-5 h-5 group-hover:ml-1 transform transition-all ease-out duration-200"></ArrowCircleDownIcon>
        </a>
        <div className="flex flex-wrap justify-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4 mt-8 pb-16 px-5">
          {handles.map((e) => (
            <div
              onClick={() => connectHandle(e)}
              className="h-20 w-20 bg-white rounded-full transform hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-blue-200 flex items-center justify-center"
            >
              <img className="w-12 h-12" src={e.img} alt={"" + e.img} />
            </div>
          ))}
        </div>
      </div>
    </section>

    // <section className="py-12 sm:py-16 bg-white">
    //     <div className="max-w-7xl px-10 mx-auto sm:text-center">
    //         <p className="text-blue-500 font-medium uppercase">Our Application Integrations</p>
    //         <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">Connect with Your Favorite Apps.</h2>
    //         <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">We've built integrations with some of your favorite services.<br className="lg:hidden hidden sm:block"> Check'em out below 👇</p>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
    //             <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
    //                 <svg className="w-16 h-auto" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M159.999 128.056a76.55 76.55 0 0 1-4.915 27.024 76.745 76.745 0 0 1-27.032 4.923h-.108c-9.508-.012-18.618-1.75-27.024-4.919A76.557 76.557 0 0 1 96 128.056v-.112a76.598 76.598 0 0 1 4.91-27.02A76.492 76.492 0 0 1 127.945 96h.108a76.475 76.475 0 0 1 27.032 4.923 76.51 76.51 0 0 1 4.915 27.02v.112zm94.223-21.389h-74.716l52.829-52.833a128.518 128.518 0 0 0-13.828-16.349v-.004a129 129 0 0 0-16.345-13.816l-52.833 52.833V1.782A128.606 128.606 0 0 0 128.064 0h-.132c-7.248.004-14.347.62-21.265 1.782v74.716L53.834 23.665A127.82 127.82 0 0 0 37.497 37.49l-.028.02A128.803 128.803 0 0 0 23.66 53.834l52.837 52.833H1.782S0 120.7 0 127.956v.088c0 7.256.615 14.367 1.782 21.289h74.716l-52.837 52.833a128.91 128.91 0 0 0 30.173 30.173l52.833-52.837v74.72a129.3 129.3 0 0 0 21.24 1.778h.181a129.15 129.15 0 0 0 21.24-1.778v-74.72l52.838 52.837a128.994 128.994 0 0 0 16.341-13.82l.012-.012a129.245 129.245 0 0 0 13.816-16.341l-52.837-52.833h74.724c1.163-6.91 1.77-14 1.778-21.24v-.186c-.008-7.24-.615-14.33-1.778-21.24z" fill="#FF4A00"></path></svg>
    //                 <p className="font-bold mt-4">Zapier</p>
    //                 <p className="mt-2 text-sm text-gray-500">Connect to 1,000+ apps</p>
    //             </div>
    //             <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
    //                 <svg className="w-16 h-auto" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"></path><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"></path><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"></path><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"></path></g></svg>
    //                 <p className="font-bold mt-4">Slack</p>
    //                 <p className="mt-2 text-sm text-gray-500">Messaging Platform</p>
    //             </div>
    //             <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
    //                 <svg className="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 262" fill="none"><path d="M192.277 86.567V55.5a23.953 23.953 0 0 0 13.815-21.594v-.727a23.998 23.998 0 0 0-23.934-23.934h-.726a24 24 0 0 0-23.935 23.934v.727A23.949 23.949 0 0 0 171.312 55.5v31.132a67.887 67.887 0 0 0-32.278 14.202l-85.44-66.541A27.259 27.259 0 1 0 40.828 50.9l84.004 65.395a68.079 68.079 0 0 0 1.049 76.757l-25.564 25.565a21.93 21.93 0 0 0-6.343-1.033 22.187 22.187 0 0 0-20.502 13.699 22.19 22.19 0 1 0 42.693 8.492 21.858 21.858 0 0 0-1.033-6.343l25.29-25.29a68.198 68.198 0 0 0 58.778 11.746 68.196 68.196 0 0 0 45.342-39.203 68.198 68.198 0 0 0-3.13-59.858 68.188 68.188 0 0 0-49.183-34.26h.048Zm-10.523 102.354a34.988 34.988 0 0 1-34.225-41.871 34.99 34.99 0 0 1 69.295 6.898 34.99 34.99 0 0 1-34.989 34.989" fill="#FF7A59"></path></svg>
    //                 <p className="font-bold mt-4">Hubspot</p>
    //                 <p className="mt-2 text-sm text-gray-500">Customer Relations</p>
    //             </div>
    //             <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
    //                 <svg className="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 190" fill="none"><path d="M115.482 49.956V189.13H0L115.482 49.956ZM115.482 0A57.587 57.587 0 0 1 98.57 40.756a57.793 57.793 0 0 1-40.83 16.882c-15.313 0-30-6.073-40.828-16.882A57.586 57.586 0 0 1 0 0h115.482ZM134.507 189.13a57.586 57.586 0 0 1 16.912-40.757 57.792 57.792 0 0 1 40.829-16.881c15.313 0 30 6.072 40.828 16.881a57.586 57.586 0 0 1 16.912 40.757H134.507ZM134.507 139.174V0h115.494L134.507 139.174Z" fill="#03363D"></path></svg>
    //                 <p className="font-bold mt-4">Zendesk</p>
    //                 <p className="mt-2 text-sm text-gray-500">Customer Messaging</p>
    //             </div>
    //             <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
    //                 <svg className="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 215" fill="none"><path d="M0 162.02V69.962c0-3.137 3.137-5.378 6.095-4.302l106.849 41.592c3.047 1.165 3.316 5.378.448 6.812L6.633 166.144C3.585 167.668 0 165.427 0 162.02Z" fill="#F82B60"></path><path d="M123.611 94.792 16.942 51.766c-3.406-1.434-3.406-6.275 0-7.709L119.31 1.479c4.661-1.972 9.95-1.972 14.7 0l102.367 42.578c3.406 1.434 3.406 6.275 0 7.709L130.155 94.792a8.3 8.3 0 0 1-6.544 0Z" fill="#FCB400"></path><path d="m139.835 214.369 107.386-41.323c1.703-.628 2.778-2.241 2.778-4.034V69.424c0-3.047-2.958-5.11-5.736-4.033l-107.387 41.323c-1.703.627-2.778 2.241-2.778 4.033v99.588c0 3.048 2.958 5.109 5.737 4.034Z" fill="#18BFFF"></path><path d="M112.944 107.252 6.095 65.66c-1.434-.538-2.868-.269-4.033.448l75.295 65.525 36.035-17.569c2.868-1.523 2.599-5.736-.448-6.812Z" fill="#BA2048"></path></svg>
    //                 <p className="font-bold mt-4">Airtable</p>
    //                 <p className="mt-2 text-sm text-gray-500">Data Management</p>
    //             </div>
    //             <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
    //                 <svg className="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" fill="none"><path d="m146.101 236.335-42.529-41.47 91.337-93.269 44.032 43.155-92.84 91.584Z" fill="#8AB4F8"></path><path d="M146.283 52.982 103.907 9.717l-92.659 91.779c-11.944 11.944-11.944 31.308 0 43.265l91.267 91.863 43.156-40.37-69.536-73.125 70.148-70.147Z" fill="#4285F4"></path><path d="M238.329 102.209 146.45 10.332c-11.958-11.957-31.35-11.957-43.308 0-11.959 11.958-11.959 31.35 0 43.308l91.879 91.876c11.958 11.958 31.35 11.958 43.308 0 11.959-11.958 11.959-31.349 0-43.307Z" fill="#8AB4F8"></path><path d="M124.092 246.372c16.53 0 29.93-13.4 29.93-29.93 0-16.529-13.4-29.929-29.93-29.929-16.531 0-29.93 13.4-29.93 29.929 0 16.53 13.399 29.93 29.93 29.93Z" fill="#246FDB"></path></svg>
    //                 <p className="font-bold mt-4">Google Tag Manager</p>
    //                 <p className="mt-2 text-sm text-gray-500">Web Tag Manager</p>
    //             </div>
    //             <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
    //                 <svg className="h-16 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 343" fill="none"><path d="M163.818 0H23.736C10.59 0 0 10.663 0 23.736v294.771c0 13.146 10.663 23.737 23.736 23.737H226.19c13.147 0 23.737-10.664 23.737-23.737V85.159h-86.109V0Z" fill="#34A853"></path><path d="M250.001 85.16h-86.182V0l86.182 85.16Z" fill="#188038"></path><path d="M46.89 132.194V245.18h156.149V132.194H46.889Zm136.722 19.354v27.388h-49.08v-27.388h49.08Zm-68.507 0v27.388H66.317v-27.388h48.788Zm-48.788 74.131v-27.388h48.788v27.388H66.317Zm68.215 0v-27.388h49.08v27.388h-49.08Z" fill="#fff"></path></svg>
    //                 <p className="font-bold mt-4">Google Sheets</p>
    //                 <p className="mt-2 text-sm text-gray-500">Spreadsheet</p>
    //             </div>
    //         </div>
    //         <a href="#_" className="px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-blue-600 bg-blue-500">View All Integrations</a>
    //     </div>
    // </section>
  );
};

export default Integrations;
