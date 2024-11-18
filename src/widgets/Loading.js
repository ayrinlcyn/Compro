import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BeatLoader color="#121b2d" loading={true} size={10} />
    </div>
  );
};

export default Loading;
