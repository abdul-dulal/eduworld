import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckOutFrom";
import Loading from "../../shere/Loading";
const stripePromise = loadStripe(
  "pk_test_51LAu8pBK2ZUV12C8aDcsEUJS2oBqt4Suq0XwkBDMKGHkuwy7mGJCi2LDvQ1HR9WwT7ltulMSjTpFYtSkWetJl5vo007tT01Rrw"
);
const Payment = () => {
  const [payment, setPayment] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://agile-harbor-55958.herokuapp.com/price/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPayment(data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="container bg-gray-200 h-screen">
      <h1 className="text-3xl font-serif pt-14"> CheckOut</h1>
      {loading ? (
        <>
          <div className="grid grid-cols-2 my-14">
            <div className="grid grid-cols-3 gap-5">
              <div>
                <img src={payment.img} className="rounded h-48" alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-serif"> {payment?.coursename}</h1>
                <h2 className="text-xl font-serif">{payment.mentor}</h2>
                <p className="text-xl font-serif">Duration : 6 Month</p>
                <p className="text-xl font-serif">Lesson : 48</p>
                <p className="text-xl font-serif">Projects : 10+ </p>
              </div>
              <div>
                <h1 className="text-2xl "> $ {payment.price}</h1>
              </div>
            </div>
            <div className="w-96">
              <h2 className="text-2xl    font-semibold uppercase tracking-widest text-purple-600">
                Proceed
              </h2>
              <div className="bg-gray-200 px-5 py-8 rounded-md ">
                <div className="flex justify-between gap-40 mb-8">
                  <h2 className="text-xl font-semibold">Product</h2>
                  <p className="text-xl font-semibold">Price</p>
                </div>
                <p className="border-solid border-2 border-gray-300 mb-5"></p>
                <div className="flex justify-between gap-40 mb-8">
                  <h2 className="text-xl font-semibold">
                    {payment.coursename}
                  </h2>
                  <p className="text-xl font-semibold">{payment.price}</p>
                </div>

                <div className="flex  justify-between">
                  <p className="">Shiping</p>
                  <p className=" ">Free Shiping</p>
                </div>
                <p className="border-solid border-2 border-gray-300 my-5"></p>
                <div className="flex  justify-between">
                  <p className="text-2xl">Total</p>
                  <p className="text-2xl text-purple-600"> $ {payment.price}</p>
                </div>
                <div className="w-[300px]">
                  <Elements stripe={stripePromise}>
                    <CheckoutFrom payment={payment} />
                  </Elements>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Payment;
