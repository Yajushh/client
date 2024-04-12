import React from "react";
import trackImage from "../images/trackImage.jpg";

export default function TrackInvestments() {
  return (
    <div className="flex flex-col items-center bg-[#fdfaec] p-12">
      {/* HEADING */}

      <div
        className="border border-black rounded-xl w-full flex mx-7"
        style={{ height: "780px" }}
      >
        {/* LEFT CONTAINER */}
        <div className="h-full" style={{ width: "860px" }}>
          <img
            src={trackImage}
            alt="Carbon Calculator"
            className="object-cover h-full w-full rounded-l-xl"
          />
        </div>

        {/* RIGHT CONTAINER */}
        {/* The calc() function calculates the remaining width */}
        <div className="h-full" style={{ width: `calc(100% - 860px)` }}>
          <div className="flex flex-col justify-center h-full p-10">
            <h2 className="text-[#1a5130] text-6xl font-bold mb-5">
              EARN CREDITS AND TRACKS YOUR INVESTMENTS
            </h2>
            <p className="text-3xl mb-10">
              Recieve your carbon credits in your wallet and track your
              investment impact every month.
            </p>
            <div className="w-64">
              <button className="bg-[#1a5130] text-white rounded-full py-4 px-3 text-2xl font-bold w-full">
                Track Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
