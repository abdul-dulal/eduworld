import React from "react";
import Bestproduct from "./Bestproduct";
import Collection from "./Collection";
import Details from "./Details";
import Product from "./Product";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <Slider />
        <Collection />
        <Product />
        <Details />
        <Bestproduct />
      </motion.div>
    </div>
  );
};

export default Home;
