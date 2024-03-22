import React from "react";
import Hero from "../Components/Hero";
import Start from "../Components/Start";

const HomePage = () => {
  return (
    <div className="justify-center items-center mx-auto mt-20">
      {<Hero />}
      {<Start />}
    </div>
  );
};

export default HomePage;
