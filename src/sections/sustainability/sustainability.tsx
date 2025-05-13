"use client";

import Image from "next/image";
import sustainability from "../../../assets/sustainability.png";

export default function Sustainability() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-800 relative">
          Sustainability
          <div className="h-1 w-10 bg-blue-600 mx-auto mt-2" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={sustainability}
              alt="Audit Checklist"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="text-gray-700 text-justify">
            Murad Apparels, an IS 9001-2015 certified enterprise endorsed by
            BSCI, SEDEX, GOTS, and ACCORD, prioritizes a secure workplace for
            our team. Operating on robust ERP, we actively minimize material
            wastage and enhance production efficiency. Our commitment extends to
            product safety, chemical-free discharge, and comprehensive recycling
            of raw materials like fabric, paper, plastic, metal, and more.
            Elevate your wardrobe with sustainable elegance at Murad Apparels.
          </p>
        </div>
      </div>
    </section>
  );
}
