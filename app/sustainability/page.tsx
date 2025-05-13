import SustainableAccessories from "@/sections/home/accessories";
import CertifiedAudits from "@/sections/sustainability/cartified-audits";
import Certificates from "@/sections/sustainability/certificates";
import Sustainability from "@/sections/sustainability/sustainability";
import React from "react";

const Page = () => {
  return (
    <div>
      <Sustainability />
      <CertifiedAudits />
      <SustainableAccessories />
      <Certificates />
    </div>
  );
};

export default Page;
