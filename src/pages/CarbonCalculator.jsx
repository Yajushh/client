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
        className="border border-black rounded-xl w-full flex mx-7 group"
        style={{ height: "780px" }}
      >
        {/* LEFT CONTAINER */}
        <div className="h-full overflow-hidden rounded-md">
          <img
            src={CarbonCalc}
            alt="Carbon Calculator"
            className="object-cover h-full rounded-l-xl transition-all duration-700 group-hover:scale-110"
          />
        </div>
        {/* RIGHT CONTAINER */}
        <div
          className="h-full flex justify-center items-center"
          style={{ width: `calc(100% - 900px)` }}
        >
          <div className="flex flex-col justify-center items-center h-full p-10 gap-12">
            <div>
              <h2 className="text-[#1a5130] text-6xl font-bold mb-5  w-full">
                CALCULATE YOUR
              </h2>
              <h2 className="text-[#1a5130] text-6xl font-bold mb-5  w-full">
                CARBON FOOTPRINTS
              </h2>
            </div>
            <p className="text-4xl mb-10 ml-5 text-[#403E3E] flex justify-center items-center">
              On a mission to finance and remove 1,000,000 tonnes of CO2 from
              the atmosphere by 2028.
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
