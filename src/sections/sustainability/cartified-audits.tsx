"use client";
import { audits } from "@/data/audits";

export default function CertifiedAudits() {
  return (
    <section className="py-12 px-4 md:px-10 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-10 relative">
          Certified Audits
          <div className="h-1 w-10 bg-red-500 mx-auto mt-2" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audits.map((audit, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{audit.title}</h3>
              <p className="text-sm text-gray-700">{audit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
