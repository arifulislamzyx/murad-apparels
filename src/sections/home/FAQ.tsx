// components/Faq.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    title: "Skilled Workforce",
    description:
      "At Murad Apparels, we are powered by a highly skilled workforce that brings craftsmanship and precision to every garment. Our dedicated team ensures that each piece meets the highest international quality standards, combining traditional expertise with modern innovation to deliver excellence in every stitch.",
  },
  {
    title: "Accountability and Transparency",
    description:
      "We believe in operating with complete transparency and holding ourselves accountable at every stage of production. At Murad Apparels, clients are updated regularly, production schedules are honored meticulously, and ethical practices are embedded into our daily operations to foster long-term trust.",
  },
  {
    title: "Product Safety",
    description:
      "Murad Apparels is committed to ensuring the highest levels of product safety. Every fabric, dye, and process used in our manufacturing undergoes rigorous testing and compliance checks, ensuring that our products are not only stylish but also safe for consumers worldwide.",
  },
  {
    title: "Occupational Health & Safety",
    description:
      "Our workforce is our strength, and their wellbeing is our priority. Murad Apparels maintains a safe, healthy, and comfortable working environment, following strict occupational health and safety standards. Regular training, safety audits, and proactive measures help create a workplace where employees can thrive.",
  },
  {
    title: "Sustainability and Recycling",
    description:
      "At Murad Apparels, sustainability is not an option — it’s a responsibility. We focus on reducing waste, optimizing energy use, and encouraging recycling in every aspect of production. From eco-friendly fabrics to responsible manufacturing techniques, we are committed to a greener future.",
  },
  {
    title: "Worldwide Export",
    description:
      "Murad Apparels proudly serves leading brands across the globe. With a fully compliant export system and a reputation for reliability, we deliver high-quality garments on time to markets in Europe, North America, Asia, and beyond, helping our partners grow with confidence.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className=" bg-slate-100">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left text-xl font-medium flex justify-between items-center"
              >
                {faq.title}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.description}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
