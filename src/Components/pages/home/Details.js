import React from "react";
import banner from "../../../assets/main.png";
const Details = () => {
  return (
    <div className="bg-[#F8F7F6] my-14">
      <div className="container grid lg:grid-cols-3 md:grid-cols-3 gap-10 ">
        <div>
          <div className="my-10">
            <p className="text-gray-300">01</p>
            <h1 className="text-2xl font-serif">Sapphire Crystal</h1>
            <p>
              Known for obtaining a remarkable hardness (nearly as hard as a
              diamond). Has a high scratch resistance which makes it a perfect
              material for wristwatches.
            </p>
          </div>
          <div className="my-10">
            <p className="text-gray-300">02</p>
            <h1 className="text-2xl font-serif">Swiss Ronda Movement</h1>
            <p>
              Known for obtaining a remarkable hardness (nearly as hard as a
              diamond). Has a high scratch resistance which makes it a perfect
              material for wristwatches.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <img src={banner} alt="" />
        </div>
        <div>
          <div className="my-10">
            <p className="text-gray-300">03</p>
            <h1 className="text-2xl font-serif">316L Stainless Steel</h1>
            <p>
              Known for obtaining a remarkable hardness (nearly as hard as a
              diamond). Has a high scratch resistance which makes it a perfect
              material for wristwatches.
            </p>
          </div>
          <div className="my-10">
            <p className="text-gray-300">04</p>
            <h1 className="text-2xl font-serif">Italian Leather Straps</h1>
            <p>
              Known for obtaining a remarkable hardness (nearly as hard as a
              diamond). Has a high scratch resistance which makes it a perfect
              material for wristwatches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
