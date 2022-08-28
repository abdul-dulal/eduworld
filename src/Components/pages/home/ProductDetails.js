import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = (product) => {
  const { name, description, img, price, quantity, suppiler, _id } =
    product.product;
  const navigate = useNavigate();

  return (
    <div className="hover:scale-[.9] duration-1000 mt-10 ">
      <div class=" shadow-xl py-10">
        <div className="flex justify-center">
          <img src={img} alt="Shoes" class="rounded w-72 h-72 " />
        </div>
        <div class="px-10 ">
          <h2 className="text-2xl font-serif">{name}</h2>
          <p className="text-[18px] mt-1">{description}</p>
          <div className="flex justify-between mt-3 ">
            <p className="font-semibold font-serif">Price: $ {price}</p>
            <p className="font-semibold font-serif mr-6">
              Qunatity: {quantity}
            </p>
          </div>
          <div className="flex justify-between py-5">
            <p className="font-semibold font-serif">Supplier: {suppiler}</p>
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

export default ProductDetails;
