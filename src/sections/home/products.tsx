// app/murad-apparels/components/ApparelManufacture.tsx

import { Shirt, Baby } from "lucide-react"; // using Lucide icons

export default function ApparelManufacture() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900">
        Apparel That We Manufacture
      </h2>
      <div>
        <h3>Here will show priducts</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Womenswear */}
        <div className="bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
          <div className="flex justify-center mb-6">
            <Shirt size={48} className="text-pink-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Womenswear</h3>
          <p className="text-base md:text-lg text-gray-700">
            Stylish tops, elegant bottoms, fashionable dresses, and quality
            outerwear designed to match modern trends and comfort.
          </p>
        </div>

        {/* Menswear */}
        <div className="bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
          <div className="flex justify-center mb-6">
            {/* <Coat size={48} className="text-blue-500" /> */}
          </div>
          <h3 className="text-2xl font-semibold mb-4">Menswear</h3>
          <p className="text-base md:text-lg text-gray-700">
            Durable tops, versatile bottoms, and premium outerwear crafted with
            superior fabrics for every lifestyle and occasion.
          </p>
        </div>

        {/* Kids Wear */}
        <div className="bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
          <div className="flex justify-center mb-6">
            <Baby size={48} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Kids Wear</h3>
          <p className="text-base md:text-lg text-gray-700">
            Adorable and durable tops, bottoms, and outerwear for kids —
            blending fun designs with practical comfort.
          </p>
        </div>
      </div>
    </section>
  );
}
