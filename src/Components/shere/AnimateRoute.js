import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AddIteam from "../pages/AddIteam";
import Blogs from "../pages/blogs/Blogs";
import Home from "../pages/home/Home";
import Inventory from "../pages/inventory/Inventory";
import Login from "../pages/login/Login";
import Manageitems from "../pages/manageitem/Manageitems";
import Myitem from "../pages/myitem/Myitem";
import Myorder from "../pages/Myorder";
import Signup from "../pages/signup/Signup";
import { motion, AnimatePresence } from "framer-motion";
import NotFound from "../pages/notfound/NotFound";
import Readblog from "../pages/blogs/Readblog";

const AnimateRoute = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/manage-tems" element={<Manageitems />} />
          <Route path="/add-item" element={<AddIteam />} />
          <Route path="/my-item" element={<Myitem />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myorder" element={<Myorder />} />
          <Route path="/inventory/:id" element={<Inventory />} />
          <Route path="/readblog/:id" element={<Readblog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimateRoute;
