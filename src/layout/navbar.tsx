"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const navItem = [
    { id: 1, item: "Home", slug: "/" },
    { id: 2, item: "About Us", slug: "/about-us" },
    {
      id: 3,
      item: "Products",
      slug: "/products",
      submenu: [
        { name: "Menswear", slug: "/categories/M01" },
        { name: "Womenswear", slug: "/categories/L01" },
        { name: "Kidswear", slug: "/categories/K01" },
      ],
    },
    {
      id: 4,
      item: "Compliance",
      slug: "/sustainability",
      submenu: [
        {
          name: "Audits",
          slug: "/sustainability",
        },
        { name: "Safety", slug: "/sustainability" },
        { name: "Welfare", slug: "/sustainability" },
      ],
    },
    { id: 5, item: "Events", slug: "/events" },
    { id: 6, item: "Contact Us", slug: "/contact-us" },
    { id: 7, item: "Career", slug: "/career" },
    { id: 8, item: "Blog", slug: "/blog" },
  ];

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className="shadow-xl fixed top-0 w-full bg-white z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo1}
            alt="murad-apparels-logo"
            width={100}
            height={40}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 relative">
          {navItem.map((item) => (
            <div key={item.id} className="relative group">
              <Link
                href={item.slug}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                {item.item}
                {item.submenu && <ChevronDown size={16} />}
              </Link>
              {item.submenu && (
                <div className="absolute  right-0 bg-white shadow-md border rounded-md hidden group-hover:block min-w-max z-50">
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.slug}
                      className="block px-8 py-3 hover:bg-gray-100 whitespace-nowrap"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-md transform transition-transform duration-300 z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image src={logo1} alt="murad-apparels-logo" width={80} height={30} />
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-2">
          {navItem.map((item) => (
            <div key={item.id}>
              <div
                className="flex justify-between items-center cursor-pointer hover:text-blue-600"
                onClick={() =>
                  item.submenu ? toggleDropdown(item.id) : setIsOpen(false)
                }
              >
                <Link href={item.slug}>{item.item}</Link>
                {item.submenu && <ChevronDown size={16} />}
              </div>
              {item.submenu && activeDropdown === item.id && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.slug}
                      className="block px-2 py-1 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
