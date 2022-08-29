import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const Inventorytable = ({ product, hotReload }) => {
  const { name, price, suppiler, quantity, _id } = product;
  const handleDelete = (id) => {
    fetch(`https://eduworld-backend.vercel.app/product/delete-item/${id}`, {
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
      });
  };
  return (
    <tr className="text-[20px] odd">
      <td>{name}</td>
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
