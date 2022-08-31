import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseInit";
import { useNavigate } from "react-router-dom";
import Loading from "../../shere/Loading";
const Myitem = () => {
  const [myItems, setmyItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  console.log(user?.email);

  useEffect(() => {
    const item = async () => {
      const url = `http://localhost:3000/product/get-myItems?user=${user?.email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setmyItems(data);
        setLoading(true);
      } catch (error) {
        // if (error.response?.status === 401 || error.response.status === 403) {
        //   // signOut(auth);
        //   // navigate("/login");
        // }
      }
    };
    item();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>My Items</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1 className="text-3xl font-serif text-center my-10">
        My Item : {myItems.length}
      </h1>

      {loading ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 container">
          {myItems.map((item) => (
            <div className="hover:scale-[.9] duration-1000 mt-10 ">
              <div class=" shadow-xl py-10">
                <div className="flex justify-center">
                  <img src={item.img} alt="Shoes" class="rounded w-72 h-72 " />
                </div>
                <div class="px-10 pt-6">
                  <h2 className="text-2xl font-serif">{item.name}</h2>
                  <p className="text-[18px] mt-1">{item.description}</p>
                  <div className="flex justify-between mt-3 ">
                    <p className="font-semibold font-serif">
                      Price: $ {item.price}
                    </p>
                    <p className="font-semibold font-serif mr-6">
                      Qunatity: {item.quantity}
                    </p>
                  </div>
                  <div className="flex justify-between py-5">
                    <p className="font-semibold font-serif">
                      Supplier: {item.suppiler}
                    </p>
                    <button
                      onClick={() => navigate(`/inventory/${item._id}`)}
                      className="border-2 border-gray-600 h-10 w-32 text-gray-600 font-semibold rounded"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </motion.div>
  );
};

export default Myitem;
