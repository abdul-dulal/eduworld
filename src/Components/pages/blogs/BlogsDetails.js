import React from "react";
import { useNavigate } from "react-router-dom";

const BlogsDetails = ({ blog }) => {
  const { img, des, title, _id } = blog;
  const navigate = useNavigate();
  return (
    <div>
      <img src={img} alt="" />
      <h1 className="text-2xl font-serif cursor-pointer">{title}</h1>
      <p>
        {des.slice(0, 59)}{" "}
        <span
          className=" ml-2 font-semibold cursor-pointer"
          onClick={() => navigate(`/readblog/${_id}`)}
        >
          Read More..
        </span>
      </p>
    </div>
  );
};

export default BlogsDetails;
