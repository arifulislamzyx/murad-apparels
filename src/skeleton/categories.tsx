import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="bg-slate-300">
      <div className="container py-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          <div className="bg-gray-300 w-2/3 h-8 mx-auto animate-pulse"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-80 cursor-pointer shadow-lg p-4 rounded bg-white hover:scale-105 transition"
            >
              <div className="bg-gray-300 rounded w-full h-44 animate-pulse"></div>
              <div className="bg-gray-300 h-6 w-1/2 mt-4 mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
