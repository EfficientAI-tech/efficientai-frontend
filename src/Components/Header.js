import React, { useState } from "react";
import "../Styles/header.css";
import { Transition } from "@headlessui/react";
import logo from "../Assets/839805_file-ai.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border-y-2 shadow-lg fixed top-0 w-full">
      <nav className="nav">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="" className="w-16 md:w-32 lg:w-48" />
              </a>
            </div>
            <div className="hidden md:flex space-x-14">
              <div className="flex items-center space-x-10">
                <a
                  href="/"
                  className="text-gray-600 hover:text-black hover-underline text-md font-semibold"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-black hover-underline text-md font-semibold"
                >
                  Company
                </a>
                <a
                  href="/product"
                  className="text-gray-600 hover:text-black hover-underline text-md font-semibold"
                >
                  Product
                </a>
                <a
                  href="/pricing"
                  className="text-gray-600 hover:text-black hover-underline text-md font-semibold"
                >
                  Pricing
                </a>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-white hover:bg-fuchsia-600 px-6 py-4 rounded-md text-md font-medium border-r hover:bg-green-500">
                  Contact Us
                </button>
                <button className="text-white hover:bg-fuchsia-600 hover:font-bold px-6 py-4 rounded-md text-md font-bold bg-fuchsia-700">
                  Join Us
                </button>
              </div>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white mr-4"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-95 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="flex text-left px-2 bg-fuchsia-100 h-[100vh]"
        >
          {(ref) => (
            <div className="md:hidden px-4 py-4 w-full mt-20" ref={ref}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full">
                <a
                  href="/"
                  className="flex justify-between items-center text-gray-600 hover:text-black block px-3 py-2 text-base font-medium border-b-2 border-t-2"
                >
                  <span>Home</span>
                  <span className="text-fuchsia-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </a>
                <a
                  href="/about"
                  className="flex justify-between items-center text-gray-600 hover:text-black block px-3 py-2 border-b-2 text-base font-medium"
                >
                  <span>Company</span>
                  <span className="text-fuchsia-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </a>
                <a
                  href="/product"
                  className="flex justify-between items-center text-gray-600 hover:text-black block px-3 py-2 border-b-2 text-base font-medium"
                >
                  <span>Product</span>
                  <span className="text-fuchsia-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </a>
                <a
                  href="/pricing"
                  className="flex justify-between items-center text-gray-600 hover:text-black block px-3 py-2 border-b-2 text-base font-medium"
                >
                  <span>Pricing</span>
                  <span className="text-fuchsia-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </a>
              </div>

              <div className="flex gap-6 items-center justify-center px-2 pt-2 pb-3 space-y-3 sm:px-5 flex-col sm:flex-row">
                <button className="mt-3 w-full text-center text-white hover:text-black hover:bg-green-600 hover:font-bold px-6 py-4 rounded-md text-lg font-bold bg-fuchsia-600">
                  Join Us
                </button>
                <button className="w-full text-center text-white hover:text-black hover:bg-green-600 hover:font-bold px-6 py-4 rounded-md text-lg font-bold bg-fuchsia-600">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
