import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/pages/home/Home";
import Login from "./Components/pages/login/Login";
import Signup from "./Components/pages/signup/Signup";
import Footer from "./Components/shere/Footer";
import { ToastContainer } from "react-toastify";
import Myorder from "./Components/pages/Myorder";
import AddIteam from "./Components/pages/AddIteam";
import Myitem from "./Components/pages/myitem/Myitem";
import Blogs from "./Components/pages/blogs/Blogs";
import Inventory from "./Components/pages/inventory/Inventory";
import Manageitems from "./Components/pages/manageitem/Manageitems";

function App() {
  return (
    <div>
      <Navbar />
      {/* http://localhost:3000/get-all" */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-tems" element={<Manageitems />} />
        <Route path="/add-item" element={<AddIteam />} />
        <Route path="/my-item" element={<Myitem />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myorder" element={<Myorder />} />
        <Route path="/inventory/:id" element={<Inventory />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
