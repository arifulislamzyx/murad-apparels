// "use client";

// import Image from "next/image";
// import { accessories } from "@/data/accessories";

// export default function SustainableAccessories() {
//   return (
//     <section className="py-12 px-4 text-center">
//       <h2 className="text-3xl font-bold">
//         <span className="text-red-600">Sustainable</span>{" "}
//         <span className="text-blue-700">Accessories</span>
//       </h2>
//       <div className="w-16 h-1 bg-gray-300 mx-auto my-4 relative">
//         <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//           <span className="text-2xl">👕</span>
//         </div>
//       </div>

//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {accessories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
//           >
//             <div className="relative h-32 mb-4 flex items-center justify-center">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={100}
//                 height={100}
//                 className="object-contain"
//               />
//             </div>
//             <p className="font-medium text-lg">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
