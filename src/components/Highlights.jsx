import React from "react";
import BuildingHighlight from "./ui/BuildingHighlight";

const Highlights = () => {
  return (
    <div className="bg-white font-sans -mr-[10rem]">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
        {/* Shareholders Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-teal-600 text-2xl font-semibold mb-4 md:ml-20 text-center md:text-left">
            Shareholders
          </h2>
          <img
            src="./Bars.png"
            alt="Shareholders Bar Chart"
            className="w-full max-w-xs lg:w-3/5 h-auto p-0 -mr-[20rem]"
          />
        </div>

        {/* Operating Highlights Section */}
        <div>
          <h2 className="text-teal-600 text-2xl font-semibold mb-8 text-center md:text-left pt-1">
            Operating Highlights
          </h2>
          <div className="flex flex-col md:flex-row md:gap-36 items-center md:items-start">
            <div className="space-y-4 text-center md:text-left">
              <p className="text-gray-600 text-xs">SAR</p>
              <p className="text-3xl font-bold text-teal-600">335</p>
              <p className="text-gray-600 text-xs">Employees</p>
              <p className="text-3xl font-bold text-teal-600">7,887</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="text-gray-600 text-xs">ATMs</p>
              <p className="text-3xl font-bold text-teal-600">+2,200</p>
              <p className="text-gray-600 text-xs">Points of Sale (PoS)</p>
              <p className="text-3xl font-bold text-teal-600">+227,740</p>
              <p className="text-gray-600 text-xs">Customer Satisfaction</p>
              <p className="text-3xl font-bold text-teal-600">96%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
