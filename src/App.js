import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/shere/Footer";
import { ToastContainer } from "react-toastify";
import AnimateRoute from "./Components/shere/AnimateRoute";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Reprizo</title>
      </Helmet>
      <Navbar />
      <AnimateRoute />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
