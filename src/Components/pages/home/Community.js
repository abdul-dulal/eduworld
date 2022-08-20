import React from "react";
import community from "../../../assets/underline.png";
import Slide from "react-reveal/Slide";

const Community = () => {
  return (
    <div>
      <Slide bottom>
        <div className="my-10">
          <h1 className="text-3xl font-serif font-medium text-center uppercase mt-10">
            community
          </h1>
          <img src={community} className="block mx-auto mt-3" alt="" />
        </div>
      </Slide>
      <div className="container grid lg:grid-cols-2 md:grid-cols-2 gap-10 justify-center my-10">
        <Slide left>
          <div>
            <h1 className="text-2xl  font-bold">Join Instructory Community</h1>
            <p className="leading-10 text-[18px] mb-6	">
              Instructory is for everyone and different from everyone. You can
              teach or you can learn, in both way you can empower youself with
              lot of skills and support. Instructory Community is the largest
              and one of the best eLearning group of Instructory, where you can
              get so many tips, tricks and news about newly arrival courses.
            </p>
            <a
              href="https://web.facebook.com/groups/programmingherocommunity"
              target="blank"
              className="bg-[#00A99D]  px-14 py-3  rounded text-xl font-bold text-[#EEEEEE]"
            >
              Join Group
            </a>
          </div>
        </Slide>
        <Slide right>
          <div className="flex justify-center items-center">
            <video
              src="https://rabbil.com/video/banner-video.mp4"
              autoPlay
              loop
            ></video>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Community;
