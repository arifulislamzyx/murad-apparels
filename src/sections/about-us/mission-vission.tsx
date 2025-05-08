"use client";

import Image from "next/image";
import { Flag, Target } from "lucide-react";
import vission from "../../../assets/mission-vission.jpg";

export default function OurMission() {
  return (
    <section className="bg-white text-gray-800">
      <div className="container px-4 py-10 md:py-24 mt-24 md:mt-10 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Flag className="text-blue-600 w-6 h-6" />
                <h2 className="text-xl md:text-2xl font-semibold">
                  Our Mission
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                At Murad Apparels, our mission is to deliver high-quality,
                sustainable, and trend-forward fashion solutions that empower
                individuals and enhance everyday confidence.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Target className="text-green-600 w-6 h-6" />
                <h2 className="text-xl md:text-2xl font-semibold">
                  Our Vision
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                To be a globally recognized apparel brand known for innovation,
                ethical production, and customer-centric values—paving the
                future of fashion that’s both stylish and responsible.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={vission}
                alt="Mission Vision Chart"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
