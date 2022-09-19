import React, { useEffect, useState } from "react";
import axios from "axios";
import BestProudctDetails from "./BestProudctDetails";
import Loading from "../../shere/Loading";
const Bestproduct = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://eduworld-backend.vercel.app/product/get-all`)
      .then((res) => {
        setProduct(res.data.slice(0, 4));
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <h1 className="uppercase text-2xl font-serif text-center my-10">
        Our best product
      </h1>
      {loading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 container">
          {products.map((product) => (
            <BestProudctDetails key={Math.random()} product={product} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Bestproduct;
