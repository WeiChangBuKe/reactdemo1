import Composer from "./Composer";
import Ani from "./Ani";

import React, { useRef } from "react";
const ComB = () => {
  const aniRef = useRef();
  return (
    <>
      <Composer
        play={() => {
           aniRef.current.play();
        }}
      ></Composer>
      <Ani ref={aniRef}></Ani>
    </>
  );
};
export default ComB;
