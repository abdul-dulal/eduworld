import React from "react";
import Community from "./Community";
import Faq from "./Faq";
import Support from "./Support";

const Home = () => {
  return (
    <>
      <div className="bg-[#035269] h-screen container lg:h-screen ">
        <div className="lg:space-y-9 space-y-4">
          <h1 className="text-[#EEEEEE] text-center tracking-widest text-xl lg:pt-36 pt-16">
            ONLINE TEACHING MARKETPLACE &amp; E-LEARNING PLATFORM
          </h1>
          <h2 className="text-white text-center text-4xl font-bold tracking-wider py-4">
            TEACH ANYTHING, LEARN ANYTIME
          </h2>
          <p className="text-white text-center text-xl">
            Browse our course categories where you can develop your skills
            anytime from the best professionals.
          </p>
          <button className="bg-[#00A99D] block mx-auto h-14 w-48 rounded text-xl font-bold text-[#EEEEEE]">
            Start Learning
          </button>
        </div>
      </div>
      <Support />
      <Community />
      <Faq />
    </>
  );
};

export default Home;
