import Image from "next/image";
import React from "react";
import about4 from "../../../assets/about_sec_.jpg";

const About = () => {
  return (
    <div className="container flex flex-col-reverse md:flex-row justify-between py-5">
      <div className="w-full md:w-2/3 p-4">
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          About Murad Apparels LTD.
        </h3>

        <p>
          Murad Apparels is a leading garment manufacturer in Bangladesh,
          dedicated to delivering premium-quality woven garments, outerwear, and
          bottoms to global markets. Established in 1994, we are a 100%
          export-oriented company with a fully integrated manufacturing facility
          spread across 57 acres, featuring 16 advanced production lines. With a
          strong emphasis on quality, efficiency, and ethical manufacturing, we
          are proudly certified by globally recognized standards including GOTS,
          BSCI, SEDEX, WRAP, Oeko-Tex, OCS, ACCORD, ISO 9001:2015, and C-TPAT.
          Our product range includes high-performance garments crafted from
          specialized materials such as PU leather and suede. From raw material
          sourcing to final shipment, we provide end-to-end solutions that
          minimize risk, enhance productivity, and support brand growth. At
          Murad Apparels, we don’t just manufacture garments — we build
          long-term partnerships founded on trust, innovation, and excellence.
        </p>
      </div>

      <Image
        src={about4}
        width={300}
        height={200}
        alt="guerment-working-photo"
        className="w-full md:w-1/3"
      />
    </div>
  );
};

export default About;
