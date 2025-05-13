import React from "react";
import customers from "@/data/our-cutomers";
import Image from "next/image";

const OurCutomers = () => {
  return (
    <div className="container mx-auto border border-black p-4 my-5">
      <h3 className="text-3xl md:text-4xl font-bold text-center pb-4 border-b-4 border-black w-60 mx-auto mb-4">
        Our Customers
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {customers.map((customer) => (
          <div key={customer.id} className="flex justify-center">
            <Image
              width={250}
              height={50}
              src={customer.image}
              alt={`Customer ${customer.id}`}
              className="hover:scale-105 shadow-md transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCutomers;
