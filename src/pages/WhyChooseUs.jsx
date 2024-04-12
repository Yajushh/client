import React from "react";
import topLeft from "../images/top-left.jpg";
import topRight from "../images/top-right.jpg";
import bottomLeft from "../images/bottom-left.jpg";
import bottomRight from "../images/bototm-right.jpg";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#fdfaec] p-12">
      <div className="flex">
        <div className="flex flex-col">
          <div>
            {/* LEFT CONTAINER */}
            <div
              style={{
                height: "360px",
                width: "1174px",
                backgroundImage: `url(${topLeft})`,
              }}
              className="bg-cover bg-center rounded-xl overflow-hidden "
            ></div>
            <div
              style={{
                height: "661px",
                width: "501px",
                backgroundImage: `url(${topRight})`,
              }}
              className="bg-cover bg-center rounded-xl overflow-hidden"
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="col-span-2 text-center">
            <h2 className="text-4xl font-bold my-8">WHY CHOOSE US?</h2>
          </div>
          <div
            style={{
              height: "661px",
              width: "501px",
              backgroundImage: `url(${bottomLeft})`,
            }}
            className="bg-cover bg-center rounded-xl overflow-hidden"
          ></div>
          <div
            style={{
              height: "360px",
              width: "1174px",
              backgroundImage: `url(${bottomRight})`,
            }}
            className="bg-cover bg-center rounded-xl overflow-hidden"
          ></div>
        </div>
      </div>
    </div>
  );
}
