import React from "react";
import topLeft from "../images/top-left.jpg";
import topRight from "../images/top-right.jpg";
import bottomLeft from "../images/bottom-left.jpg";
import bottomRight from "../images/bototm-right.jpg";

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-4 mx-8 py-4">
      <div className="col-span-2 row-span-2">
        <img
          src={topLeft}
          alt="Large landscape"
          className="w-full h-[100%] object-cover rounded-lg mb-4"
        />
      </div>
      <div className="col-start-2 justify-center items-center flex row-start-3 text-5xl font-bold text-[#1A5130]">
        WHY CHOOSE US?
      </div>
      <div className="row-span-3 col-start-3 row-start-1">
        <img
          src={topRight}
          alt="money"
          className="w-full h-[] object-cover rounded-lg mb-4"
        />
      </div>
      <div className="row-span-3 col-start-1 row-start-3">
        <img
          src={bottomLeft}
          className="w-full h-full object-cover rounded-lg mb-4"
          alt="earth"
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-4">
        <img
          src={bottomRight}
          alt="leaf"
          className="w-full h-[100%] object-cover rounded-lg mb-4"
        />
      </div>
    </div>
  );
}
