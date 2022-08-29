import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLock2Line } from "react-icons/ri";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import Loading from "../../shere/Loading";
import auth from "../../../firebaseInit";
import Sociallogin from "../../shere/Sociallogin";
import { Helmet } from "react-helmet";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let errorElement = "";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error) {
    errorElement = error.message;
  }
  const onSubmit = async (data) => {
    const email = data.email;
    signInWithEmailAndPassword(data.email, data.password);
    const res = await axios.post(
      `https://eduworld-backend.vercel.app/user/login`,
      {
        email,
      }
    );
    localStorage.setItem("access", res.data);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 gap-[1px] lg:px-48  bg-gray-300 ">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="my-6">
          <Sociallogin />
        </div>
        <div className="bg-white shadow-lg my-6">
          <div className="  w-full flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-serif text-center my-5">
                Log In Into Your Account
              </h1>

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
                <div className="flex justify-between my-3">
                  <p>Remember Me</p>
                  <p>Forget Password?</p>
                </div>
              </label>
              <br />
              <input
                type="submit"
                value="Register"
                className={`lg:w-96 w-80 h-14 bg-[#035269] text-white rounded-md cursor-pointer `}
              />
              <p className="text-center mt-4">
                Don't have an account? Register here
                <Link to={"/signup"} className="text-purple-600 ml-2">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
