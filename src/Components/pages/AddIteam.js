import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebaseInit";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { MdOutlineCancel } from "react-icons/md";
const AddIteam = () => {
  const [user] = useAuthState(auth);

  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    // console.log(s);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imgStoreKey = "62b824b8fcaa7767525638a0ce8e3079";

  const handleAdd = (data) => {
    console.log(data);
    const img = data.img[0];
    console.log(data.img);
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const products = {
            img: result.data.url,
            name: data.name,
            description: data.description,
            user: user.email,
            suppiler: data.suppiler,
            price: data.price,
            quantity: data.quantity,
          };

          fetch("http://localhost:3000/product/post-product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(products),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              toast("Prodcut successfully added..");
            });
        }
      });
    reset();
  };

  return (
    <motion.div
      className="bg-gray-200"
      initial={{ opacity: 0 }}
      transition={{ delay: 2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Add Item</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1 className="text-2xl font-serif text-center pt-16">Add Product</h1>

      <div className=" py-10 flex justify-center items-center ">
        <form onSubmit={handleSubmit(handleAdd)} className="">
          {/* <div>
            {file.length > 0 &&
              file.map((item, index) => {
                return (
                  <div key={item} className="relative">
                    <img
                      src={item}
                      alt=""
                      className="w-[365px] h-36  opacity-90 z-50 "
                    />
                    <div className="absolute top-0 right-3 ">
                      <button
                        type="button"
                        onClick={() => deleteFile(index)}
                        className="text-white text-3xl"
                      >
                        <MdOutlineCancel />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div> */}

          <label
            class={`w-[370px] flex flex-col items-center px-2 py-4 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer  ease-linear transition-all duration-150 ${
              file.length === 1 ? "hidden" : "block"
            }`}
          >
            <BsFillCloudArrowUpFill className="text-5xl" />
            <span className="font-semibold">Upload a Product</span>
            <input
              type="file"
              {...register("img", {})}
              className="hidden"
              // onChange={uploadSingleFile}
            />
          </label>

          <input
            type="text"
            placeholder=" Enter Title"
            {...register("name", {
              required: {
                value: true,
                message: "Please Enter Title",
              },
            })}
            className="input  input-bordered block input-accent   w-[370px] my-3 h-16 shadow-lg  px-3  mt-6  text-[17px] placeholder:text-[#035269]  bg-white rounded-md focus:ring "
          />
          {errors.title?.type === "required" && (
            <span className="label-text-alt block text-red-500 text-xl">
              {errors.title.message}.
            </span>
          )}
          <input
            type="text"
            placeholder=" Enter Description"
            {...register("description", {
              required: {
                value: true,
                message: "Please Enter Description",
              },
            })}
            className="input  input-bordered block input-accent  lg:w-[370px] md:w-[370px] w-[370px] my-3 h-16 shadow-lg  px-3    text-[17px] placeholder:text-[#035269]  bg-white rounded-md focus:ring "
          />
          {errors.description?.type === "required" && (
            <span className="label-text-alt block text-red-500 text-xl">
              {errors.description.message}.
            </span>
          )}
          <input
            type="number"
            placeholder=" Enter Quantity"
            {...register("quantity", {
              required: {
                value: true,
                message: "Please Enter Quantity",
              },
            })}
            className="input  input-bordered block input-accent  lg:w-[370px] md:w-[370px] w-[370px] my-3 h-16 shadow-lg  px-3    text-[17px] placeholder:text-[#035269]  bg-white rounded-md focus:ring "
          />
          {errors.quantity?.type === "required" && (
            <span className="label-text-alt block text-red-500 text-xl">
              {errors.quantity.message}.
            </span>
          )}
          <input
            type="number"
            placeholder=" Enter price"
            {...register("price", {
              required: {
                value: true,
                message: "Please Enter Price",
              },
            })}
            className="input  input-bordered block input-accent  lg:w-[370px] md:w-[370px] w-[370px] my-3 h-16 shadow-lg  px-3    text-[17px] placeholder:text-[#035269]  bg-white rounded-md focus:ring "
          />
          {errors.price?.type === "required" && (
            <span className="label-text-alt block text-red-500 text-xl">
              {errors.price.message}.
            </span>
          )}
          <input
            type="text"
            placeholder=" Enter Supplier"
            {...register("suppiler", {
              required: {
                value: true,
                message: "Please Enter Supplier",
              },
            })}
            className="input  input-bordered block input-accent  lg:w-[370px] md:w-[370px] w-[370px] my-3 h-16 shadow-lg  px-3    text-[17px] placeholder:text-[#035269]  bg-white rounded-md focus:ring "
          />
          {errors.supplier?.type === "required" && (
            <span className="label-text-alt block text-red-500 text-xl">
              {errors.supplier.message}.
            </span>
          )}
          <div></div>
          <input
            type="submit"
            value="Add Quantity"
            className={`border-2  border-gray-600 h-14 w-48 mb-5 cursor-pointer text-gray-600 font-semibold rounded mt-4 `}
          />
        </form>
      </div>
    </motion.div>
  );
};

export default AddIteam;
