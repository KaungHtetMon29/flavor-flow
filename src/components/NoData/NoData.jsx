import React from "react";
import { IoSearchCircle } from "react-icons/io5";

const NoData = () => {
  return (
    <div className="text-[22px] animate-pulse flex-col text-primarycolor text-4xl font-bold justify-center items-center w-full text-center tracking-wide h-full flex">
      <IoSearchCircle className="text-[7rem] text-secondarycolor" />
      <p className="text-4xl text-center">Could not find any data</p>
    </div>
  );
};

export default NoData;
