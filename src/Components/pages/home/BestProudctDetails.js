import React from "react";
import { useNavigate } from "react-router-dom";

const BestProudctDetails = ({ product }) => {
  const { name, img, price, suppiler, quantity, _id } = product;
  const navigate = useNavigate();
  return (
    <div className="bg-[#F8F7F6]">
      <div class="  py-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded w-72 h-72 hover:translate-x-1"
        />

        <div class="px-10 ">
          <h2 className="text-xl font-serif">{name}</h2>

          <div className="flex justify-between mt-3 ">
            <p className="text-[18px font-serif]">Price: $ {price}</p>
            <p className="text-[18px font-serif]">Qunatity: {quantity}</p>
          </div>
          <div className="flex justify-between py-5">
            <p className="text-[18px font-serif]">Supplier: {suppiler}</p>
            <button
              onClick={() => navigate(`/inventory/${_id}`)}
              className="border-2 border-gray-600 h-10 w-32 text-gray-600 font-semibold rounded"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProudctDetails;
