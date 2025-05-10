import { FileText, Package, Leaf } from "lucide-react";
import Image from "next/image";
import backGroundImage from "../../../assets/background.jpeg";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Background Image */}
      <Image
        src={backGroundImage}
        alt="Background"
        fill
        className="object-cover z-0"
      />
      {/* Overlay to dim background */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10 "></div>

      {/* Content */}
      <div className="container relative z-20 max-w-4xl mx-auto pt-14 md:pt-0">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Apparel Manufacturer in Bangladesh
        </h1>
        <p className="text-white text-xl md:text-2xl font-semibold mb-8">
          X Years of Manufacturing Experience
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={"/company_profile_muradApparels.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-[#3236a8] hover:bg-[#2a2e8a] text-white py-3 px-6 rounded-lg text-lg font-medium">
              <FileText className="w-5 h-5" /> Company Profile
            </button>
          </a>

          <Link href={"/products"}>
            <button className="flex items-center gap-2 bg-[#3236a8] hover:bg-[#2a2e8a] text-white py-3 px-6 rounded-lg text-lg font-medium">
              <Package className="w-5 h-5" /> Products
            </button>
          </Link>

          <Link href={"/sustainability"}>
            <button className="flex items-center gap-2 bg-[#019e53] hover:bg-[#017b40] text-white py-3 px-6 rounded-lg text-lg font-medium">
              <Leaf className="w-5 h-5" /> Sustainability Report 2023
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
