"use client";

import { BadgeCheck, TimerReset, ShieldCheck } from "lucide-react";
import Image from "next/image";
import compliance from "../../../assets/complaince.webp";
import community from "../../../assets/commitment.png";
import efficiency from "../../../assets/efficiency.webp";

export default function OurValues() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Commitment */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Image
                src={community}
                alt="Commitment"
                width={100}
                height={100}
                // fill
                // className="rounded-full object-cover"
              />
            </div>
            <BadgeCheck className="text-blue-600 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Commitment</h3>
            <p className="text-gray-600">
              We value our commitments for on-time delivery, quality, and
              sustainability.
            </p>
          </div>

          {/* Efficiency */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="relative  mb-4">
              <Image
                src={efficiency}
                alt="Efficiency"
                width={100}
                height={100}
                // fill
                // className="rounded-full object-cover"
              />
            </div>
            <TimerReset className="text-green-600 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
            <p className="text-gray-600">
              We set high efficiency standards to run our core functions to
              excel.
            </p>
          </div>

          {/* Compliance */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="relative  mb-4">
              <Image
                src={compliance}
                alt="Compliance"
                width={100}
                height={100}
                // className="rounded-full object-cover"
              />
            </div>
            <ShieldCheck className="text-purple-600 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Compliance</h3>
            <p className="text-gray-600">
              We test our social & technical compliance rigorously & routinely
              for accountability and transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
