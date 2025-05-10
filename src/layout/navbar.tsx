"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = [
    { id: 1, item: "Home", slug: "/" },
    { id: 2, item: "About Us", slug: "/about-us" },
    { id: 3, item: "Products", slug: "/products" },
    { id: 4, item: "Sustainability", slug: "/sustainability" },
    { id: 5, item: "Career", slug: "/career" },
    { id: 6, item: "Blog", slug: "/blog" },
  ];

  return (
    <nav className="shadow-xl fixed top-0 w-full bg-white z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={logo1}
            alt="murad-apparels-logo"
            width={100}
            height={40}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItem.map((item) => (
            <Link
              key={item.id}
              href={item.slug}
              className="hover:text-blue-600"
            >
              {item.item}
            </Link>
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

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image src={logo1} alt="murad-apparels-logo" width={80} height={30} />
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {navItem.map((item) => (
            <Link
              key={item.id}
              href={item.slug}
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {item.item}
            </Link>
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
