import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product/get-all")
      .then((res) => res.json())
      .then((data) => setProduct(data.slice(0, 6)));
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
