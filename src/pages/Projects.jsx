import React from "react";
import projects from "../images/projects.jpg";

export default function Projects() {
  return (
    <div className="flex flex-col items-center bg-[#fdfaec] p-12">
      <div
        className="border border-black rounded-xl w-full flex mx-7 group"
        style={{ height: "780px" }}
      >
        {/* LEFT CONTAINER */}
        {/* style={{ width: `calc(100% - 860px)` }} */}
        <div className="h-full">
          <div className="flex flex-col justify-center h-full p-10">
            <h2 className="text-[#1a5130] text-6xl font-bold mb-5">
              CONNECT WITH A PROJECT AND INVEST
            </h2>
            <p className="text-3xl mb-10">
              Choose a project and we'll connect you with the on-ground team
              before you invest.
            </p>
            <div className="w-64">
              <button className="bg-[#1a5130] text-white rounded-full py-4 px-3 text-2xl font-bold w-full transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130]">
                Projects
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="h-full overflow-hidden rounded-md ">
          <img
            src={projects}
            alt="Carbon Calculator"
            className="object-cover h-full rounded-l-xl transition-all duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
