import Image from "next/image";
import sectionImg from "../../../assets/cloating_manufature_in_bd.jpg";

export default function MuradApparelsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Part */}
        <div className="relative w-full h-72 md:h-full">
          <Image
            src={sectionImg}
            alt="Murad Apparels Factory"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-lg w-full md:w-1/3"
          />
        </div>

        {/* Text Part */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Clothing Manufacturer in Bangladesh
          </h2>
          <p className=" leading-relaxed text-gray-700 mb-6">
            Founded in 1994, <strong>Murad Apparels</strong> is a 100%
            export-oriented, fully integrated woven garment manufacturing
            facility based in Bangladesh. Spanning 57 acres and equipped with 16
            modern production lines, we specialize in high-quality outerwear and
            bottoms, including PU and suede-based products.
          </p>
          <p className="leading-relaxed text-gray-700 mb-6">
            Our certifications — GOTS, BSCI, SEDEX, WRAP, Oeko-Tex, OCS, ACCORD,
            ISO 9001:2015 (QMS), and C-TPAT — reflect our commitment to global
            standards and ethical practices. We deliver smart, progressive
            manufacturing solutions designed to boost your brand’s productivity
            while maintaining cost control and world-class quality.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            <strong>Lead time:</strong> 90–120 days. Partner with Murad Apparels
            for reliable, efficient, and high-value garment manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
}
