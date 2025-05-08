import CertifiedAudits from "@/sections/sustainability/cartified-audits";
import Certificates from "@/sections/sustainability/certificates";
import SdgGoals from "@/sections/sustainability/SdgGoals";
import Sustainability from "@/sections/sustainability/sustainability";
import React from "react";

const Page = () => {
  return (
    <div>
      <Sustainability />
      <CertifiedAudits />
      <SdgGoals />
      <Certificates />
    </div>
  );
};

export default Page;
