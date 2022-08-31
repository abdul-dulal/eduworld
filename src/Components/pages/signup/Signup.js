import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebaseInit";
import Loading from "../../shere/Loading";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLock2Line } from "react-icons/ri";
import Sociallogin from "../../shere/Sociallogin";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import axios from "axios";
const Register = () => {
  const [agree, setAgree] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createUserWithEmailAndPassword, luser, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
    await axios.post(`http://localhost:3000/user/signup`, {
      email,
      password,
    });

    reset();
  };

  if (luser) {
    return navigate("/");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <motion.div
        className=" grid lg:grid-cols-2 md:grid-cols-2 gap-[1px] lg:px-48  bg-gray-300 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Helmet>
          <title> Signup</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="my-6">
          <Sociallogin />
        </div>
        <div className="bg-white shadow-lg my-6">
          <div className="  w-full flex items-center justify-center py-20">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-serif text-center my-5">
                Sign Into Your Account
              </h1>
              <div className="flex relative ">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  className="border-2 border-gray-400 lg:w-96  w-80  h-14 px-3  text-lg my-3 placeholder:text-[#035269] bg-white rounded-md focus:ring "
                />
                <BsPerson className="text-black absolute right-3  mt-7 text-2xl" />
              </div>
              <label>
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>

              <div className="flex relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "add special digit",
                    },
                  })}
                  className="border-2 border-gray-400 lg:w-96  w-80  h-14 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md focus:ring "
                />
                <AiOutlineMail className="text-black absolute right-3 mt-7 text-2xl" />
              </div>
              <label>
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label>
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500 mt-2 text-xl">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label>
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <div className=" flex relative">
                <input
                  type="password"
                  required
                  placeholder="Password"
                  {...register("password")}
                  className="border-2 border-gray-400 lg:w-96 md:w-80 w-80  h-14 px-3 my-2   text-lg placeholder:text-[#035269]  bg-white rounded-md focus:ring "
                />
                <RiLock2Line className="text-black absolute right-3 mt-7 text-2xl" />
              </div>
              <label>
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors.password?.message}
                  </span>
                )}
              </label>
              <label className="block">
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
              </label>
              <label>
                <input
                  type="checkbox"
                  className="my-4"
                  onClick={() => setAgree(!agree)}
                />
                <span
                  className={`ml-3 ${
                    agree ? "text-green-700" : "text-red-700"
                  }`}
                >
                  I agree to the privacy policy
                </span>
              </label>
              <br />
              <input
                disabled={!agree}
                type="submit"
                value="Register"
                className={`lg:w-96 w-80 h-14 bg-[#035269] text-white rounded-md ${
                  !agree ? "cursor-not-allowed" : "cursor-pointer"
                } `}
              />
              <p className="text-center mt-5">
                You Have Already An Account?
                <Link to={"/login"} className="text-purple-600 ml-2 ">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Register;
