import React, { useState } from "react";
import "../Styles/header.css";
import { Transition } from "@headlessui/react";
// import logo from "../Assets/Icon.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border-y-2 shadow-lg">
      <nav className="nav">
        <div className="container max-w-7xl  mx-auto flex items-center justify-around">
          <div className="flex items-center justify-between h-20">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-black font-bold">Logo</span>
                {/* <img src={logo} alt="" /> */}
              </div>
              <div className="hidden md:flex gap-20">
                <div className="ml-10 flex items-baseline mt-2 space-x-4">
                  <a
                    href="/"
                    className="text-gray-600 hover:text-black hover-underline px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-black hover-underline px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Company
                  </a>
                  <a
                    href="/product"
                    className="text-gray-600 hover:text-black hover-underline px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Product
                  </a>
                  <a
                    href="/pricing"
                    className="text-gray-600 hover:text-black hover-underline px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pricing
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-gray-600 hover:text-black hover:bg-green-600 hover:font-bold px-6 py-4 rounded-md text-sm font-bold bg-green-500">
                    Join Us
                  </button>
                </div>
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
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="flex text-left px-2"
        >
          {(ref) => (
            <div className="md:hidden px-6" ref={ref}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-80">
                <a
                  href="/"
                  className="flex justify-between items-center text-gray-600 hover:text-black block px-3 py-2 text-base font-medium border-b-2 border-t-2"
                >
                  <span>Home</span>
                  <span className="text-green-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </a>
                <a
                  href="/"
                  className="flex justify-between items-center text-gray-600 hover:text-black block px-3 py-2 border-b-2 text-base font-medium"
                >
                  <span>Company</span>
                  <span className="text-green-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </a>
                <a
                  href="/"
                  className="flex justify-between items-center text-gray-600 hover:text-black block px-3 py-2 border-b-2 text-base font-medium"
                >
                  <span>Product</span>
                  <span className="text-green-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </a>
                <a
                  href="/"
                  className="flex justify-between items-center text-gray-600 hover:text-black block px-3 py-2 border-b-2 text-base font-medium"
                >
                  <span>Pricing</span>
                  <span className="text-green-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </a>
              </div>

              <button className="flex w-full text-center items-center text-gray-600 hover:text-black text-center hover:bg-green-600 hover:font-bold px-6 py-4 rounded-md text-sm font-bold bg-green-500">
                Sign Up
              </button>
              <div className="flex items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button className="text-gray-600 hover:text-black hover:bg-gray-100 px-6 py-4 rounded-md text-sm font-medium">
                  Login
                </button>
                <a
                  href="/"
                  className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
