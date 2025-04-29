import Image from "next/image";
import image from "../../../assets/guerment-photo.jpeg";

export default function MuradApparelsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Part */}
        <div className="relative w-full h-72 md:h-full">
          <Image
            src={image} // ✅ Put your factory image in public/ folder
            alt="Murad Apparels Factory"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Part */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Clothing Manufacturer in Bangladesh
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
            Founded in 2013, <strong>Murad Apparels</strong> is a 100%
            export-oriented, fully integrated woven garment manufacturing
            facility based in Bangladesh. Built on 57 acres of land with a
            modern 16-line factory, we specialize in producing high-quality
            outerwear and all kinds of bottoms, including suede and PU leather
            products.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
            Our facilities are certified by GOTS, BSCI, SEDEX, WRAP, Oeko-Tex,
            OCS, ACCORD, ISO 9001:2015 (QMS), and C-TPAT, ensuring world-class
            standards. We offer smart, progressive manufacturing solutions
            helping brands boost productivity while controlling costs — all with
            a relentless focus on style, quality, communication, and timing.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            <strong>Lead time:</strong> 90–120 days. Partner with Murad Apparels
            for unmatched reliability, innovation, and craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
