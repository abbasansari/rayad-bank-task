// import React from "react";

const FinancialHighlights = () => {
  return (
    <div className="container ml-6 mt-7 p-8 relative flex flex-col">
      <h2 className="text-teal-600 text-xl font-semibold mb-8">
        Financial Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 relative flex-grow">
        {/* Column 1 */}
        <div className="space-y-1 flex flex-col items-start">
          <h3 className="text-gray-600 text-sm">Total assets</h3>
          <p className="text-xs font-bold text-gray-500">SAR</p>
          <p className="text-4xl font-bold text-teal-600">
            360 <span className="font-bold">Bn.</span>
          </p>
          <p className="text-lg font-bold text-gray-600">+8%</p>
          <hr className="border-t-2 border-teal-600 w-16" />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-start">
          <h3 className="text-gray-600 text-sm">Net Income</h3>
          <p className="text-xs font-bold text-gray-500">SAR</p>
          <p className="text-4xl font-bold text-teal-600">
            8.0 <span className="font-bold">Bn.</span>
          </p>
          <p className="text-lg font-bold text-gray-600">+15%</p>
          <hr className="border-t-2 border-teal-600 w-16" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-start">
          <h3 className="text-gray-600 text-sm">Operating Income</h3>
          <p className="text-xs font-bold text-gray-500">SAR</p>
          <p className="text-4xl font-bold text-teal-600">
            16 <span className="font-bold">Bn.</span>
          </p>
          <p className="text-lg font-bold text-gray-600">+17%</p>
          <hr className="border-t-2 border-teal-600 w-16" />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-start mt-5">
          <h3 className="text-gray-600 text-sm">Net Loans</h3>
          <p className="text-xs font-bold text-gray-500">SAR</p>
          <p className="text-4xl font-bold text-teal-600">
            274 <span className="font-bold">Bn.</span>
          </p>
          <p className="text-lg font-bold text-gray-600">+13%</p>
          <hr className="border-t-2 border-teal-600 w-16" />
        </div>

        {/* Column 5 */}
        <div className="flex flex-col items-start mt-5 ml-[24rem]">
          <h3 className="text-gray-600 text-sm">EPS</h3>
          <p className="text-xs font-bold text-gray-500">SAR</p>
          <p className="text-4xl font-bold text-teal-600">2.58</p>
          <p className="text-lg font-bold text-gray-600">+11%</p>
          <hr className="border-t-2 border-teal-600 w-16" />
        </div>
      </div>

      {/* Juggling Man Image Positioned */}
      <div className="flex justify-center items-end object-center mt-14 ">
        <div className="absolute left-1/3 transform -translate-x-1/4 flex justify-center items-center mr-30 mt-12">
          <img
            src="./man-blue-cubes 1.png"
            alt="Man juggling"
            className="max-w-xs md:w-auto mt-60 pr-24 pt-30"
          />
        </div>
      </div>

      {/* Column 6 */}
      <div className="flex flex-col items-start ">
        <h3 className="text-gray-600 text-sm">Deposits</h3>
        <p className="text-xs font-bold text-gray-500">SAR</p>
        <p className="text-4xl font-bold text-teal-600">
          255 <span className="font-bold">Bn.</span>
        </p>
        <p className="text-lg font-bold text-gray-600">+6%</p>
        <hr className="border-t-2 border-teal-600 w-16" />
      </div>
    </div>
  );
};

export default FinancialHighlights;
