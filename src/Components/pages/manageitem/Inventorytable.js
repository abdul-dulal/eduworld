import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const Inventorytable = ({ product, hotReload }) => {
  const { name, price, suppiler, quantity, _id, img } = product;
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/product/delete-item/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        hotReload();
        console.log("Success:", data);
        toast("Delete Successfully");
      });
  };
  return (
    <tr className="text-[20px] odd">
      <td>{name}</td>
      <td>
        <img src={img} className="w-28 h-20" alt="" />
      </td>
      <td>{price}</td>
      <td>{suppiler}</td>
      <td>{quantity}</td>
      <td onClick={() => handleDelete(_id)}>
        <AiTwotoneDelete className=" ml-10 block text-2xl text-gray-600 cursor-pointer" />
      </td>
    </tr>
  );
};

export default Inventorytable;
