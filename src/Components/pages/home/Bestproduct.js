import React, { useEffect, useState } from "react";
import axios from "axios";
import BestProudctDetails from "./BestProudctDetails";
const Bestproduct = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/get-all")
      .then((res) => setProduct(res.data.slice(0, 4)));
  }, []);

  return (
    <div>
      <h1 className="uppercase text-2xl font-serif text-center my-10">
        Our best product
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 container">
        {products.map((product) => (
          <BestProudctDetails key={Math.random()} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Bestproduct;
