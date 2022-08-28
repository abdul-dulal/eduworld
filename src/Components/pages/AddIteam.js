import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { toast } from "react-toastify";
import auth from "../../firebaseInit";
const AddIteam = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imgStoreKey = "62b824b8fcaa7767525638a0ce8e3079";

  const handleAdd = (data) => {
    const img = data?.img[0];
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
            user: user?.email,
            price: data.price,
            supplier: data.supplier,
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
  };

  return (
    <div className="bg-gray-200">
      <h1 className="text-2xl font-serif text-center pt-16">Add Product</h1>
      <div className=" py-10 flex justify-center items-center">
        <form onSubmit={handleSubmit(handleAdd)} className="">
          <label class="w-[370px] flex flex-col items-center px-2 py-4 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer  ease-linear transition-all duration-150">
            <BsFillCloudArrowUpFill className="text-5xl" />
            <span className="font-semibold">Upload a Product</span>
            <input type="file" {...register("img", {})} className="hidden" />
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
            {...register("supplier", {
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
    </div>
  );
};

export default AddIteam;
