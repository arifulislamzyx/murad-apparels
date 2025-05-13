import CertifiedAudits from "@/sections/sustainability/cartified-audits";
import Certificates from "@/sections/sustainability/certificates";
import Sustainability from "@/sections/sustainability/sustainability";
import React from "react";

const Page = () => {
  return (
    <div>
      <Sustainability />
      <CertifiedAudits />
      <Certificates />
    </div>
  );
};

export default Page;
