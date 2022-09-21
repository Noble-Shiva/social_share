import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { images } from "../constants";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import Integrations from "../pages/Integrations";

const AddHandle = ({ show, onDialogClosed }) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onDialogClosed}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex text-base text-left transform transition max-w-md md:max-w-5xl mx-2 md:px-4 my-8 md:my-8 lg:max-w-7xl">
                <div className="bg-white rounded-lg mt-16">
                  <div className="mt-5 w-full text-right pr-5 md:pr-5 px-4 border border-transparent">
                    <button
                      className="focus:outline-none"
                      onClick={() => onDialogClosed()}
                    >
                      <XCircleIcon
                        className="h-10 w-10 text-blue-600"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="max-w-md md:max-w-5xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Integrations />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddHandle;
