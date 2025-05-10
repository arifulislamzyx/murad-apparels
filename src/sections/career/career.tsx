"use client";

import React, { useState } from "react";
import jobPosts from "@/data/job-posts";

const ITEMS_PER_PAGE = 6;

const CareerPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobPosts.length / ITEMS_PER_PAGE);

  const paginatedPosts = jobPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Careers at Our Company
      </h1>

      <div className="space-y-6">
        {paginatedPosts.map((job) => (
          <div
            key={job.id}
            className="border border-gray-300 p-5 rounded-md shadow-sm hover:shadow-md transition-all"
          >
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-gray-500 mb-1">
              {job.location} • {job.type}
            </p>
            <p className="text-gray-700">{job.description}</p>
            <button className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`w-10 h-10 rounded-full border ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CareerPage;
