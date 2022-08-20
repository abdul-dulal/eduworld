import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseInit";
import OrderDetails from "../OrderDetails";

const Myorder = () => {
  const [orders, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  console.log(user.email);
  const url = `http://localhost:3000/my-order?email=${user.email}`;
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div className="container mt-10">
      <h1 className="text-2xl font-serif text-center my-5">Previous Order</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderDetails key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorder;
