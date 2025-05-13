import Image from "next/image";
import React from "react";
import whyChooseUs from "../../../assets/why_choose_us.jpg";

const WhyChooseUs = () => {
  return (
    <div className="bg-sky-100">
      <div className="container flex  flex-col-reverse gap-4 md:flex-row mx-auto justify-between py-4">
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            Why do you choose Murad Apparels
          </h3>
          <p>
            At Murad Apparels, exceptional quality, reliability, and innovation
            are the cornerstones of every successful partnership. With decades
            of manufacturing excellence, we offer unmatched expertise in
            producing premium woven garments, outerwear, and bottoms — including
            specialized items crafted from suede and PU leather. Our advanced,
            57-acre manufacturing facility houses 16 production lines, ensuring
            efficiency, scalability, and top-tier quality control. We are
            certified by globally recognized bodies including GOTS, BSCI, SEDEX,
            WRAP, Oeko-Tex, OCS, ACCORD, ISO 9001:2015, and C-TPAT —
            guaranteeing ethical, sustainable, and responsible production
            practices. From raw material sourcing to final shipment, we provide
            a complete, secure solution tailored to enhance your brand’s
            productivity while reducing operational risks. Our focus on
            innovation, craftsmanship, and seamless communication ensures you’re
            not just getting a product — you’re gaining a partner committed to
            your success. When you choose Murad Apparels, you choose trust,
            innovation, and a dedicated team passionate about delivering
            excellence at every step.
          </p>
        </div>

        <Image
          src={whyChooseUs}
          width={300}
          height={200}
          alt="why-choose-murad-apparels"
          className="w-full md:w-1/3"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
