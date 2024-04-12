import React from "react";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";

export default function FeaturedResources() {
  return (
    <div className="flex flex-col items-center bg-[#edfad9] p-5">
      <div className="w-full flex justify-center" style={{ height: "1200px" }}>
        <div className="flex flex-col h-full justify-center items-center p-10">
          {/* Heading */}
          <div className="text-[#1a5130] text-7xl font-bold w-full flex justify-center mb-20">
            Featured Resources
          </div>
          {/* CARDS */}
          <div className=" flex flex-row gap-10 mx-10 p-10">
            {/* Card 1 */}
            <div
              className="relative"
              style={{ height: "680px", width: "390px" }}
            >
              <img
                src={card1}
                alt="Carbon Credits with Wind Turbines"
                className="w-full h-full rounded-3xl object-cover"
              />
              <div className="absolute backdrop-blur bottom-0 w-full p-3 bg-stone-400 bg-opacity-75 text-white rounded-b-3xl h-2/6 flex flex-col items-center  font-semibold">
                <div className="text-3xl mb-16">
                  What are Carbon Credits and how do they work?
                </div>
                <div className="text-2xl font-semibold mb-0">
                  Coming Soon...
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="relative"
              style={{ height: "680px", width: "390px" }}
            >
              <img
                src={card2}
                alt="Carbon Emission Reduction for Businesses"
                className="w-full h-full rounded-3xl object-cover"
              />
              <div className="absolute backdrop-blur bottom-0 w-full p-3 bg-stone-400 bg-opacity-75 text-white rounded-b-3xl h-2/6 flex flex-col items-center font-semibold">
                <div className="text-3xl mb-10">
                  How Businesses and Organizations Can Reduce Their Carbon
                  Emissions
                </div>
                <div className="text-2xl font-semibold mb-0">
                  Coming Soon...
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div
              className="relative"
              style={{ height: "680px", width: "390px" }}
            >
              <img
                src={card3}
                alt="Carbon Credits and Wildfire"
                className="w-full h-full rounded-3xl object-cover"
              />
              <div className="absolute backdrop-blur bottom-0 w-full p-3 bg-stone-400 bg-opacity-75 text-white rounded-b-3xl h-2/6 flex flex-col items-center gap-20 font-semibold">
                <div className="text-3xl ">
                  What are Carbon Credits and how do they work?
                </div>
                <div className="text-2xl font-semibold mb-0">
                  Coming Soon...
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div
              className="relative"
              style={{ height: "680px", width: "390px" }}
            >
              <img
                src={card4}
                alt="Carbon Credit Technologies with People Planting"
                className="w-full h-full rounded-3xl object-cover"
              />
              <div className="absolute backdrop-blur bottom-0 w-full p-3 bg-stone-400 bg-opacity-75 text-white rounded-b-3xl h-2/6 flex flex-col items-center  font-semibold">
                <div className="text-3xl mb-14">
                  What are the different carbon credit technologies?
                </div>
                <div className="text-2xl font-semibold ">Coming Soon...</div>
              </div>
            </div>
          </div>
          <div className="w-64">
            <button className="bg-[#1a5130] text-white rounded-full py-4 px-3 text-2xl font-bold w-full transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130]">
              More Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
