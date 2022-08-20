import React from "react";
import { AiFillDelete } from "react-icons/ai";
const OrderDetails = ({ order }) => {
  const { coursename, img, price } = order;
  return (
    <tr>
      <th>{coursename}</th>
      <td>
        <img src={img} width="100" height="100" alt="" />
      </td>
      <td>{price}</td>
      <td>
        <AiFillDelete className="text-2xl cursor-pointer " onClick={""} />
      </td>
    </tr>
  );
};

export default OrderDetails;
