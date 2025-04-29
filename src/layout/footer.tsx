// app/components/Footer.tsx

import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircleHeart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121c2d]">
      <div>
        <div className="conatiner text-gray-300 py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ABOUT US */}
          <div>
            <h4 className="text-white font-semibold mb-4">ABOUT US</h4>
            <ul className="space-y-2">
              <li>Company Profile</li>
              <li>About Us</li>
              <li>Vision, Mission &amp; Values</li>
              <li>Board of Directors</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-white font-semibold mb-4">PRODUCTS</h4>
            <ul className="space-y-2">
              <li>Women’s Wear</li>
              <li>Men’s Wear</li>
              <li>Kid’s Wear</li>
              <li>Uniform</li>
              <li>Nightwear</li>
            </ul>
          </div>

          {/* SUSTAINABILITY */}
          <div>
            <h4 className="text-white font-semibold mb-4">SUSTAINABILITY</h4>
            <ul className="space-y-2">
              <li>Sustainability</li>
              <li>Certified Audits</li>
              <li>Natural Fabric</li>
              <li>Sustainable Accessories</li>
              <li>Value Addition On Garments</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-semibold mb-4">CONTACT INFO</h4>
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

        {/* Social Icons */}

        {/* Bottom Line */}
        <div className="text-center text-sm mt-6 text-gray-400 border-t border-gray-700 pt-6">
          © Poshgarments – 2024. All Rights Reserved. Developed &amp; SEO by{" "}
          <span className="text-white font-semibold">Inovixi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
