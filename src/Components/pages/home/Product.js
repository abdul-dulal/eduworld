import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://eduworld-backend.vercel.app/product/get-all")
      .then((res) => setProduct(res.data.slice(0, 6)));
  }, []);

  return (
    <div className="">
      <div className=" container  grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
        {products.map((product) => (
          <ProductDetails product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
