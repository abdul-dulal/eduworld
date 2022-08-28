import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../shere/Loading";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Inventory = () => {
  const [inventory, setInvetory] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axios.get(`http://localhost:3000/product/single/${id}`).then((res) => {
      // setInvetory(res.data);
      console.log();
      setLoading(true);
    });
  }, []);

  const handleDeliverd = () => {
    const newQuantity = inventory?.quantity - 1;
    const updateQuantity = { ...inventory, quantity: newQuantity };
    setInvetory(updateQuantity);
    fetch(`http://localhost:3000/product/quantity/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    });
  };
  const onSubmit = (data) => {
    let quantity = parseFloat(data.number);
    const upQuantity = {
      ...inventory,
      quantity: quantity + parseFloat(inventory.quantity),
    };
    console.log(quantity);
    setInvetory(upQuantity);
    fetch(`http://localhost:3000/product/quantity/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upQuantity),
    });
  };
  reset();

  return (
    <div className="bg-gray-200">
      <h1 className="text-2xl text-center font-serif py-10">
        Deliver the Product
      </h1>

      <div className="container flex flex-wrap gap-10">
        <div>
          <form onSubmit={handleSubmit()}>
            <input
              type="number"
              placeholder="Please Enter Number"
              {...register("number", {
                required: {
                  value: true,
                  message: "Please Enter Email",
                },
              })}
              className="input  input-bordered block input-accent my-3   w-80 h-14"
            />
            {errors.number?.type === "required" && (
              <span className="label-text-alt block text-red-500 text-xl">
                {errors.number.message}.
              </span>
            )}
            <input
              type="submit"
              value="Add Quantity"
              className={`border-2  border-gray-600 h-14 w-32 cursor-pointer text-gray-600 font-semibold rounded mt-4 
                  
                `}
            />
          </form>
        </div>
        {loading ? (
          <div>
            <div className=" lg:h-[700px] lg:w-[450px]  md:h-[700px] md:w-[325px] block mx-auto ">
              <div className="bg-white mb-10 rounded-md ">
                <div class=" shadow-xl py-10">
                  <div className="flex justify-center w-full">
                    <img
                      src={inventory?.img}
                      alt="Shoes"
                      class="rounded w-72 h-72"
                    />
                  </div>
                  <div class="px-10 ">
                    <h2 className="text-2xl font-serif">{inventory?.name}</h2>
                    <p className="text-[18px] mt-1">{inventory?.description}</p>
                    <div className="flex justify-between mt-3 ">
                      <p className="font-semibold font-serif">
                        Price: $ {inventory?.price}
                      </p>
                      <p className="font-semibold font-serif mr-6">
                        Qunatity: {inventory?.quantity}
                      </p>
                    </div>
                    <div className="flex justify-between py-5">
                      <p className="font-semibold font-serif mr-6">
                        Supplier: {inventory?.suppiler}
                      </p>
                      <button
                        onClick={() => handleDeliverd()}
                        className={`border-2 border-gray-600 h-10 w-32 text-gray-600 font-semibold rounded ${
                          inventory?.quantity === 0
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        } `}
                      >
                        Deliverd
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Inventory;
