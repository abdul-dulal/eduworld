import React from "react";
import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import slider1 from "../../../assets/slider/slider1.png";
import slider2 from "../../../assets/slider/slider2.png";
import slider3 from "../../../assets/slider/slider3.png";
const Slider = () => {
  return (
    <div className="mt-3">
      <Swiper
        modules={[Autoplay, A11y]}
        autoplay={true}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => console.log()}
        onSlideChange={() => console.log()}
      >
        <SwiperSlide>
          <div className="bg-[#F8F7F6] h-screen container">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div>
                  <div className="space-y-1">
                    <p className="text-xl font-serif">
                      High Defination Professional
                    </p>
                    <h2 className="text-3xl font-serif  uppercase tracking-widest ">
                      apple watch
                    </h2>
                    <p className="text-xl  uppercase">like + serise 3</p>
                    <p>
                      We built in cellular ,GPS and altimeter, Apple Watch nike
                      + has
                      <br /> all the features you need to take your run to the
                      next level
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-20">
                <img src={slider1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F8F7F6] h-screen container">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div>
                  <div className="space-y-1">
                    <p className="text-xl font-serif">
                      High Defination Professional
                    </p>
                    <h2 className="text-3xl font-serif  uppercase tracking-widest ">
                      apple watch
                    </h2>
                    <p className="text-xl  uppercase">like + serise 3</p>
                    <p>
                      We built in cellular ,GPS and altimeter, Apple Watch nike
                      + has
                      <br /> all the features you need to take your run to the
                      next level
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="pt-20">
                  <img src={slider2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F8F7F6] h-screen container">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div>
                  <div className="space-y-1">
                    <p className="text-xl font-serif">
                      High Defination Professional
                    </p>
                    <h2 className="lg:text-3xl md:text-3xl   font-serif  uppercase tracking-widest ">
                      apple watch
                    </h2>
                    <p className="text-xl  uppercase">like + serise 3</p>
                    <p>
                      We built in cellular ,GPS and altimeter, Apple Watch nike
                      + has
                      <br /> all the features you need to take your run to the
                      next level
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="pt-20">
                  <img src={slider3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
