import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const item = async () => {
      const url = `http://localhost:3000/product/get-all`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProduct(data.slice(0, 6));
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          // signOut(auth);
          // navigate("/login");
        }
      }
    };
    item();
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
