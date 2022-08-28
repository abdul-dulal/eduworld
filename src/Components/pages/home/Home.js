import React from "react";
import Bestproduct from "./Bestproduct";
import Collection from "./Collection";
import Details from "./Details";
import Product from "./Product";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Collection />
      <Product />
      <Details />
      <Bestproduct />
    </>
  );
};

export default Home;
