import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogsDetails from "./BlogsDetails";
import Loading from "../../shere/Loading";
import { motion } from "framer-motion";
const Blogs = () => {
  const [blogs, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/blog/get-allBlogs`).then((res) => {
      setBlog(res.data);
      setLoading(true);
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <div></div>
      {loading ? (
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 ">
          {blogs.map((blog) => (
            <BlogsDetails key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </motion.div>
  );
};

export default Blogs;
