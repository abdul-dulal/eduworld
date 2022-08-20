import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../../firebaseInit";
import Loading from "../../shere/Loading";
import Navbar from "../../navbar/Navbar";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [verified, setVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, luser, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    reset();
  };

  if (luser) {
    console.log(user);
    return navigate("/");
  }

  if (loading) {
    return <Loading />;
  }
  const hadleCapctha = () => {
    setVerified(true);
  };

  return (
    <>
      <div className=" bg-gray-200">
        <div className="container  w-full flex items-center justify-center py-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="font-semibold uppercase block my-3">Email</label>

            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
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
                className="input input-bordered input-accent w-full max-w-xs"
              />
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
            <br />
            <label className="font-semibold uppercase my-3">Password</label>
            <div>
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register(
                  "password",
                  {
                    required: {
                      value: true,
                      message: "Pawssword is Required",
                    },
                  },
                  {
                    minLength: {
                      value: 6,
                      message: "Password must be 6 character",
                    },
                  }
                )}
                className="border-2 border-gray-400 w-80 h-12 px-3  my-3 placeholder:text-purple-400 bg-white rounded-md focus:ring"
              />
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

            <div className="my-4">
              <p className="my-4">RECAPTCHA</p>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={hadleCapctha}
              />
            </div>

            <label>
              <input
                type="checkbox"
                className="my-4"
                onClick={() => setAgree(!agree)}
              />
              <span
                className={`ml-3 ${agree ? "text-green-700" : "text-red-700"}`}
              >
                I agree to the privacy policy
              </span>
            </label>
            <br />
            <input
              disabled={!verified || !agree}
              type="submit"
              value="Register"
              className={`w-80 h-12 bg-purple-600 text-white rounded-md ${
                !verified || !agree ? "cursor-not-allowed" : "cursor-pointer"
              } `}
            />
            <p>
              You Have Already An Account?
              <Link to={"/login"} className="text-purple-600 ml-2">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
