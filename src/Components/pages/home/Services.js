import React, { useEffect, useState } from "react";
import Loading from "../../shere/Loading";
import Ratting from "./Ratting";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseInit";
import Slide from "react-reveal/Slide";
import service from "../../../assets/underline.png";

const Services = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://agile-harbor-55958.herokuapp.com/get-all")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.slice(0, 4));
        setLoading(true);
      });
  }, []);

  return (
    <>
      <Slide bottom>
        <div className="my-10">
          <h1 className="text-3xl font-serif font-medium text-center uppercase mt-10">
            Services
          </h1>
          <img src={service} className="block mx-auto mt-3" alt="" />
        </div>
      </Slide>
      <Slide bottom>
        <div>
          {loading ? (
            <>
              <div className="flex lg:justify-between gap-8 flex-wrap justify-center container mt-10  overflow-hidden ">
                {courses.map((course) => (
                  <div className="parent ">
                    <div class=" rounded-md bg-base-100 shadow-xl w-64 h-96 border-2">
                      <img
                        src={course.img}
                        className="  h-60 w-56 pt-3 ml-3 rounded-lg"
                        alt=""
                      />

                      <div class=" py-4 px-6  text-base font-semibold ">
                        <h2 class="">{course.coursename}</h2>

                        <div className="flex gap-1">
                          <p>${course.price}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            {course.ratting ? (
                              <Ratting ratting={course.ratting} />
                            ) : (
                              <p className="mt-3">★★★★★</p>
                            )}
                          </div>
                          <div>
                            <button
                              onClick={() => navigate(`/payment/${course._id}`)}
                              className="bg-[#00A99D] h-10 w-24 rounded-full mt-3 text-white"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </Slide>
    </>
  );
};

export default Services;
