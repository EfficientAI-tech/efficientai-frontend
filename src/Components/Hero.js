import React from "react";
import banner from "../Assets/behance-64a548be8b3db 1.png";
import "../Styles/hero.css";
const Hero = () => {
  return (
    <div className="w-full  hero flex items-center justify-center h-[100vh] bg-fuchsia-200">
      <div className="container mx-auto flex flex-col justify-between items-center md:flex-row -mt-20 sm:mt-0">
        <div className="container flex flex-col items-center md:items-start gap-10 text-center md:text-left">
          <h1 className="container text-3xl md:text-4xl lg:text-7xl font-semibold">
            Simplify your AI journey,{" "}
            <span className="text-fuchsia-700">Go multicloud</span> in{" "}
            <span className="text-fuchsia-700">minutes.</span>
          </h1>
          <p className="md:text-2xl text-gray-700 font-semibold hidden sm:block">
            Simplify MLOps with Enterprise Grade Integration with MultiCloud
            Environments
          </p>
          <div className="hidden sm:flex gap-4">
            <button className="text-gray-600 hover:text-white hover:bg-fuchsia-600 px-6 sm:px-10 py-4 rounded-md text-lg font-semibold border-r hover:bg-green-500">
              Contact Us
            </button>
            <button className="text-white hover:bg-fuchsia-600 hover:font-bold px-6 sm:px-10 py-4 rounded-md text-lg font-sembold bg-fuchsia-700">
              Join Us
            </button>
          </div>
        </div>
        <div className="flex items-center container">
          <img src={banner} alt="" className="p-4 md:w-full" />
        </div>
        <p className="text-1xl mb-5 text-gray-700 text-center font-semibold block sm:hidden">
          Simplify MLOps with Enterprise Grade Integration with MultiCloud
          Environments
        </p>
        <div className="flex gap-4 mt-5 sm:hidden">
          <button className="text-gray-600 hover:text-white hover:bg-fuchsia-600 px-6 sm:px-10 py-4 rounded-md text-lg font-semibold border-r hover:bg-green-500">
            Contact Us
          </button>
          <button className="text-white hover:bg-fuchsia-600 hover:font-bold px-6 sm:px-10 py-4 rounded-md text-lg font-sembold bg-fuchsia-700">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
