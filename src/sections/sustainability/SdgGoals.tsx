"use client";

import Image from "next/image";

export default function SdgGoals() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-blue-600">Sustainability</span>{" "}
          <span className="text-red-600">Development Goals</span>
          <div className="h-1 w-10 bg-blue-500 mx-auto mt-2" />
        </h2>

        <div className="flex justify-center mb-8">
          <div className="relative w-80 h-60 md:w-[450px] md:h-[280px]">
            <Image
              src="/images/sdg-goals.png" // Replace with your actual image
              alt="Sustainable Development Goals"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-gray-700 text-justify text-sm md:text-base">
          Meeting the Sustainable Development Goals (SDGs) is of utmost
          importance for Posh Garments. It not only ensures long-term viability
          and competitiveness but also promotes sustainable and ethical
          practices. By addressing issues like responsible production, gender
          equality, and decent work conditions, we enhance our brand&apos;s
          reputation and contribute to a more inclusive and sustainable future.
        </p>
      </div>
    </section>
  );
}
