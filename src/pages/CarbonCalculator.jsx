import React from "react";
import CarbonCalc from "../images/carbonCalc.jpg";

export default function CarbonCalculator() {
  return (
    <div className="flex flex-col items-center bg-[#fdfaec] p-12">
      {/* HEADING */}
      <div className="flex flex-col text-center gap-6 mb-16">
        <div className="text-[#1a5130] text-7xl font-bold">
          Decarbonize your Business
        </div>
        <div className="text-[#1a5130] text-7xl font-bold">
          Invest in Carbon Offset projects
        </div>
      </div>
      <div
        className="border border-black rounded-xl w-full flex mx-7"
        style={{ height: "780px" }}
      >
        {/* LEFT CONTAINER */}
        <div className="h-full" style={{ width: "860px" }}>
          <img
            src={CarbonCalc}
            alt="Carbon Calculator"
            className="object-cover h-full rounded-l-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* RIGHT CONTAINER */}
        <div className="h-full " style={{ width: `calc(100% - 860px)` }}>
          <div className="flex flex-col justify-center h-full p-10">
            <h2 className="text-[#1a5130] text-6xl font-bold mb-5">
              CALCULATE YOUR CARBON FOOTPRINTS
            </h2>
            <p className="text-3xl mb-10">
              Use our open-source calculator to find out how much CO2 your
              business emits.
            </p>
            <div className="w-full">
              <div className="w-64">
                <button className="bg-[#1a5130] text-white rounded-full py-4 px-3 text-2xl font-bold w-full transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130]">
                  Carbon Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
