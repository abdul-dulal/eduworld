import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../shere/Loading";
const Readblog = () => {
  const { id } = useParams();
  const [singleBlogs, setSingleBlogs] = useState({});
  const [loading, setLoading] = useState(false);
  const { img, des, title } = singleBlogs;

  useEffect(() => {
    axios
      .get(`https://eduworld-backend.vercel.app/blog//signle-blog/${id}`)
      .then((res) => {
        setSingleBlogs(res.data);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="container">
          <img src={img} className="h-80 w-80" alt="" />
          <p className="text-2xl font-serif">{title}</p>
          <p className="text-[18px] mt-4">{des}</p>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Readblog;
