import React from "react";

export default function About() {
  return (
    <div className=" items-center bg-[#fdfaec] p-12">
      <div className=" w-full flex flex-col mx-7" style={{ height: "780px" }}>
        <div className="flex flex-col text-center gap-6 mb-16">
          <div className="text-[#1a5130] text-7xl font-bold ">
            Know More About Us
          </div>
          <div className="text-[#1a5130] text-7xl font-bold ">
            And Our Journey
          </div>
        </div>
        <div className="flex flex-row">
          {/* LEFT CONTAINER */}
          <div className="h-full" style={{ width: `calc(100% - 860px)` }}>
            <div className="flex flex-col justify-center h-full p-10">
              <h2 className=" text-4xl  mb-5 font-semibold">
                At Decarbonn, we envision a world where every business,
                regardless of its size, plays a part in creating a sustainable
                future.
              </h2>
              <p className="text-4xl mb-10">
                We are here to guide and support this transition, one carbon
                credit at a time.
              </p>
              <p className="text-4xl mb-10">
                Join us in our journey towards a sustainable future. Together,
                we can make a difference.
              </p>
              <div className="w-64">
                <button className="bg-[#1a5130] text-white rounded-full py-4 px-3 text-2xl font-bold w-full transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130]">
                  About Us
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER */}
          {/* The calc() function calculates the remaining width */}
          <div
            className="h-full border border-black rounded-lg"
            style={{ width: "860px" }}
          >
            Video
          </div>
        </div>
      </div>
    </div>
  );
}
