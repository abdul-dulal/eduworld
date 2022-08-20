import React from "react";
import { useNavigate } from "react-router-dom";
import Community from "./Community";
import Faq from "./Faq";
import Services from "./Services";
import Support from "./Support";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#035269] h-screen container lg:h-screen ">
        <div className="lg:space-y-9 space-y-4">
          <Fade left>
            <h1 className="text-[#EEEEEE] text-center tracking-widest text-xl lg:pt-36 pt-16">
              ONLINE TEACHING MARKETPLACE &amp; E-LEARNING PLATFORM
            </h1>
          </Fade>

          <Fade right>
            <h2 className="text-white text-center lg:text-4xl md:text-2xl font-serif font-bold tracking-wider py-4">
              TEACH ANYTHING, LEARN ANYTIME
            </h2>
          </Fade>
          <Slide top>
            <p className="text-white text-center text-xl">
              Browse our course categories where you can develop your skills
              anytime from the best professionals.
            </p>
          </Slide>
          <Zoom>
            <button
              className="bg-[#00A99D] block mx-auto h-14 w-48 rounded text-xl font-bold text-[#EEEEEE]"
              onClick={() => navigate("/course")}
            >
              Start Learning
            </button>
          </Zoom>
        </div>
      </div>
      <Services />
      <Support />
      <Community />
      <Faq />
    </>
  );
};

export default Home;
