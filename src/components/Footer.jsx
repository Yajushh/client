import React from "react";

export default function Footer() {
  return (
    <div
      className="bg-[#fdfaec] flex-wrap flex w-full h-32 drop-shadow-lg"
      style={{
        boxShadow: "0 4px 6px -6px #222", // Adjust the shadow intensity and spread as needed
      }}
    >
      <div className="flex justify-center py-4 items-center mx-auto gap-3">
        <div className="font-extrabold text-5xl font-serif">Trusted By :</div>
        <div className="flex">
          <span className="font-extrabold text-5xl font-serif">AIR</span>
          <span className="text-5xl font-serif font-extralight">MINERS</span>
        </div>
      </div>
    </div>
  );
}
