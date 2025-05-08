import Image from "next/image";
import React from "react";
import whyChooseUs from "../../../assets/why-choose-us-sec.jpg";

const WhyChooseUs = () => {
  return (
    <div className="bg-sky-100">
      <div className="container flex  flex-col-reverse gap-4 md:flex-row mx-auto justify-between py-4">
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            Why do you choose Murad Apparels
          </h3>
          <p>
            At Murad Apparels, we believe that exceptional quality, reliability,
            and innovation are the cornerstones of successful partnerships. With
            over a decade of manufacturing excellence, we bring unmatched
            expertise in producing high-quality woven garments, outerwear, and
            bottoms — including specialized products like suede and PU leather.
            Our state-of-the-art, 57-acre facility with 16 production lines
            ensures efficiency, scalability, and the highest standards of
            quality control. Certified by leading global organizations such as
            GOTS, BSCI, SEDEX, WRAP, Oeko-Tex, OCS, ACCORD, ISO 9001:2015, and
            C-TPAT, we guarantee ethical, sustainable, and responsible
            production practices. From sourcing to final shipment, we offer a
            complete, secure solution designed to increase your brand’s
            productivity while reducing operational costs. Our relentless focus
            on style, craftsmanship, timing, and communication ensures you not
            only get products — you get a partner committed to your success.
            When you choose Murad Apparels, you choose trust, innovation, and a
            seamless experience backed by a team that is passionate about
            delivering excellence every step of the way.
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
