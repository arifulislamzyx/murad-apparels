"use client";

import Image from "next/image";
import { valueAdditionItems } from "@/data/value-adition";
import { ListVideo } from "lucide-react";

export default function ValueAddition() {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-blue-600">Value Addition</span>{" "}
          <span className="text-blue-600">On Garments</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueAdditionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-5 shadow-md flex items-start gap-4"
            >
              <div className="relative w-14 h-14 flex-shrink-0 mt-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm grid grid-cols-1 sm:grid-cols-2 gap-y-1">
                  {item.points.map((point, i) => (
                    <p key={i} className="flex items-center gap-1">
                      <ListVideo /> {point}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
