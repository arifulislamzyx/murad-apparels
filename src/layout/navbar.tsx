import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.jpeg";
import Link from "next/link";

const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
      slug: "/",
    },
    {
      id: 1,
      item: "About Us",
      slug: "/about-us",
    },
    {
      id: 1,
      item: "Products",
      slug: "/products",
    },
    {
      id: 1,
      item: "Sustainability",
      slug: "/sustainability",
    },
    {
      id: 1,
      item: "Career",
      slug: "/career",
    },
    {
      id: 1,
      item: "Blog",
      slug: "/blog",
    },
  ];
  return (
    <nav className="shadow-2xl">
      <div className="container flex justify-evenly  py-5">
        <Image
          src={logo}
          alt="murad-apparels-logo"
          width={100}
          height={40}
        ></Image>

        <div className="flex justify-evenly gap-5">
          {navItem.map((item) => (
            <div key={item.id} className="">
              <Link href={item.slug} className="cursor-pointer">
                {item.item}
              </Link>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
