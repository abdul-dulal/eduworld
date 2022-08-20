import React from "react";
import support from "../../../assets/facilitis-icon-2.png";
import internship from "../../../assets/virtual-internship.png";
import career from "../../../assets/Career-Placement.png";
import facilities from "../../../assets/underline.png";
const Support = () => {
  return (
    <div>
      <h1 className="text-3xl font-serif font-medium text-center uppercase mt-10">
        facilities
      </h1>
      <img src={facilities} className="block mx-auto mt-3" alt="" />
      <div className="flex lg:justify-between gap-8 flex-wrap justify-center container mt-10">
        <div className="bg-[#F8FBEA] rounded-lg py-16 px-10 space-y-3 lg:w-96 md:w-80 ">
          <img src={support} alt="" />
          <h1 className="text-2xl font-serif font-medium">Lifetime support</h1>
          <p>
            Even though the training is over, the relationship with you is not
            over. you get life time support. 24/7 online support anytime. Our
            subject wise experienced team ensures this support offline or
            online.
          </p>
        </div>
        <div className="bg-[#F8FBEA] rounded-lg py-16 px-10 space-y-3 lg:w-96 md:w-80">
          <img src={internship} alt="" />
          <h1 className="text-2xl font-serif font-medium">
            Virtual Internship
          </h1>
          <p>
            EduWorld has internship opportunities for students. Although
            virtual, there is room to gain real office experience. So after
            completing the course you will get an opportunity to work with
            industry experts at home through virtual internship. Besides, office
            work is also available.
          </p>
        </div>
        <div className="bg-[#F8FBEA] rounded-lg py-16 px-10 space-y-3 lg:w-96 md:w-80">
          <img src={career} alt="" />
          <h1 className="text-2xl font-serif font-medium">
            Career placement support
          </h1>
          <p>
            The job placement department works to get the CV to the right place
            according to the students' qualifications. From here you will get
            various seminars on post-course grooming and career guidelines. It
            will put you far ahead of anyone else in the career race.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
