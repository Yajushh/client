import React from "react";
import projects from "../images/projects.jpg";
export default function Test() {
  return (
    <div class="relative w-full h-auto">
      <div class="group relative overflow-hidden">
        <div class="w-full h-full transition-transform transform-gpu group-hover:scale-110">
          <img class="object-cover w-full h-full" src={projects} alt="Image" />
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-white text-center">
            <h2 class="text-xl font-bold">Your Text Here</h2>
            <p>Your additional text content here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
