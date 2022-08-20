import React from "react";
import { Puff } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex justify-center mt-5">
      <Puff
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loading;
