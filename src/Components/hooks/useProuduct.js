import React from "react";
import { useQuery } from "react-query";
import Loading from "../shere/Loading";
const useProuduct = () => {
  const {
    isLoading,
    data: products,
    refetch: hotReload,
  } = useQuery("repoData", () =>
    fetch("http://localhost:3000/product/get-all").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return { products, hotReload, isLoading };
};

export default useProuduct;
