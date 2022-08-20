import React from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseInit";

const CheckoutFrom = ({ payment }) => {
  console.log(payment);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCarderror] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transitionid, setTransitionid] = useState("");

  const { price, img, coursename } = payment;
  const [user] = useAuthState(auth);

  const newPrice = { price: price };

  useEffect(() => {
    if (price) {
      fetch(`https://still-tundra-10310.herokuapp.com/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPrice),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCarderror(error?.message || "");

    // confirm card payment
    const { paymentIntent, error: intenetError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: price,
          },
        },
      });
    if (intenetError) {
      setCarderror(intenetError.message());
    } else {
      setCarderror("");
      setTransitionid(paymentIntent.id);
      toast.success("your payment success");

      const payment = {
        coursename,
        img,
        price,
        email: user?.email,
      };

      fetch("http://localhost:3000/my-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((response) => response.json())
        .then((data) => {});
    }
  };

  return (
    <div>
      <div className="   w-[500px]">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="ml-5 "
          />
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="bg-[#E51A4B] px-10 py-3 rounded-md my-4 ml-3 text-white cursor-pointer "
          >
            Checkout Now
          </button>
        </form>
        {cardError && <h1 className="text-red-700  ml-3"> {cardError}</h1>}
      </div>
    </div>
  );
};

export default CheckoutFrom;
