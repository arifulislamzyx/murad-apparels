"use client";

import Image from "next/image";
import { whatWeDoItems } from "@/data/what-we-do";

export default function WhatWeDo() {
  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatWeDoItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex gap-5"
            >
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-md object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
