import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircleHeart,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#121c2d]">
      <div>
        <div className="conatiner text-gray-300 py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ABOUT US */}
          <div>
            <h4 className="text-white font-semibold mb-4">ABOUT US</h4>
            <ul className="space-y-2">
              <a
                href="/company_profile_muradApparels.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Company Profile</li>
              </a>
              <Link href={"/about-us"}>
                <li>About Us</li>
              </Link>
              <Link href={"/about-us"}>
                <li>Vision, Mission &amp; Values</li>
              </Link>
              <li>Board of Directors</li>
              <Link href={"/about-us"}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">PRODUCTS</h4>
            <ul className="space-y-2">
              <Link href={"/products"}>
                <li>Women’s Wear</li>
              </Link>
              <Link href={"/products"}>
                <li>Men’s Wear</li>
              </Link>

              <Link href={"/products"}>
                <li>Kid’s Wear</li>
              </Link>
            </ul>
          </div>

          {/* SUSTAINABILITY */}
          <div>
            <h4 className="text-white font-semibold mb-4">SUSTAINABILITY</h4>
            <ul className="space-y-2">
              <Link href={"/sustainability"}>
                <li>Sustainability</li>
              </Link>

              <Link href={"/sustainability"}>
                <li>Certified Audits</li>
              </Link>
              <Link href={"/sustainability"}>
                <li>Natural Fabric</li>
              </Link>
              <Link href={"/sustainability"}>
                <li>Sustainable Accessories</li>
              </Link>

              <Link href={"/sustainability"}>
                <li>Value Addition On Garments</li>
              </Link>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-semibold mb-4">CONTACT INFO</h4>
            <div>
              <ul className="space-y-2 text-sm">
                <li>
                  Murad Apparels Limited
                  <br />
                  South Gouripur Ashulia 1341,
                  <br />
                  Bangladesh.
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <span>📧</span>
                  <a href="mailto:info@poshgarments.com" className="underline">
                    info@muradapparelsltd.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📞</span>
                  <a href="tel:+8801717564460" className="underline">
                    +880 1873-358809
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <a href="#" className="underline">
                    Google Map Location
                  </a>
                </li>
              </ul>

              <ul></ul>
            </div>
            <div className="flex justify-center mt-10 space-x-6">
              <a href="#" aria-label="Facebook">
                <Facebook
                  className="text-white hover:text-blue-400 transition-all duration-300"
                  size={24}
                />
              </a>
              <a href="#" aria-label="Linkedin">
                <Linkedin
                  className="text-white hover:text-blue-400 transition-all duration-300"
                  size={24}
                />
              </a>
              <a href="#" aria-label="Pinterest">
                <MessageCircleHeart
                  className="text-white hover:text-blue-400 transition-all duration-300"
                  size={24}
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram
                  className="text-white hover:text-pink-400 transition-all duration-300"
                  size={24}
                />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube
                  className="text-white hover:text-red-500 transition-all duration-300"
                  size={24}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-6 text-gray-400 border-t border-gray-700 py-8">
          © Mural Apparels – 2024. All Rights Reserved. Developed &amp; SEO by{" "}
          <span className="text-white font-semibold">Inovixi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
