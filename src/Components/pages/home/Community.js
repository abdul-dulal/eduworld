import React from "react";
import community from "../../../assets/underline.png";
const Community = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-3xl text-center font-semibold uppercase">
          community
        </h1>
        <img src={community} className="block mx-auto mt-3" alt="" />
      </div>
      <div className="container grid lg:grid-cols-2 md:grid-cols-2 gap-10 my-10">
        <div>
          <h1 className="text-2xl  font-bold">Join Instructory Community</h1>
          <p className="leading-10 text-[18px]	">
            Instructory is for everyone and different from everyone. You can
            teach or you can learn, in both way you can empower youself with lot
            of skills and support. Instructory Community is the largest and one
            of the best eLearning group of Instructory, where you can get so
            many tips, tricks and news about newly arrival courses.
          </p>
          <button className="bg-[#00A99D] mt-5 h-14 w-48 rounded text-xl font-bold text-[#EEEEEE]">
            Join Group
          </button>
        </div>
        <div>
          <video
            src="https://rabbil.com/video/banner-video.mp4"
            autoPlay
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Community;
