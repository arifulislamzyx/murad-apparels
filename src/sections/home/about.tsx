import Image from "next/image";
import React from "react";
import about from "../../../assets/guerment-photo.jpeg";

const About = () => {
  return (
    <div className="container flex justify-between py-5">
      <div className="w-2/3 p-4">
        <h3 className="text-2xl font-bold mb-4">About Murad Apparels LTD.</h3>

        <p>
          Murad Apparels is a 100% export-oriented, comprehensive ready-made
          woven garment manufacturing unit, operating with 16 production lines
          across a 57-acre facility, established in 2013. We deliver the best in
          buying and production services, covering sourcing, procurement,
          manufacturing, quality control, follow-up, creative services, image
          production, and logistics. Murad Apparels offers a progressive
          approach to managing your brand and boosting your company’s
          productivity, while reducing costs with full security and
          transparency. We bring a relentless focus on style, quality, timing,
          communication, professionalism, and operational efficiency.
          Exceptional quality is the foundation of our company and drives every
          decision — from selecting premium materials to delivering outstanding
          customer service. We specialize in outerwear and all kinds of bottoms,
          including suede and PU leather products. Our manufacturing facilities
          are proudly certified by GOTS, BSCI, SEDEX, WRAP, Oeko-Tex, OCS,
          ACCORD, ISO 9001:2015 (QMS), and C-TPAT. Our lead time typically
          ranges from 90 to 120 days, ensuring timely and reliable delivery to
          our partners worldwide.
        </p>
      </div>

      <Image
        src={about}
        width={300}
        height={200}
        alt="guerment-working-photo"
        className="w-1/3"
      />
    </div>
  );
};

export default About;
