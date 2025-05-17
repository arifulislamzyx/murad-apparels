"use client";
import Navbar from "@/layout/navbar";
import Sidebar from "@/layout/sidebar";
import { AlignJustify, X } from "lucide-react";
import { ReactNode, useState } from "react";

interface layoutProps {
  children: ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const [openDashboardMenu, setOpenDashboardMenu] = useState(false);

  const toggleDashMenu = () => {
    setOpenDashboardMenu(!openDashboardMenu);
  };
  return (
    <>
      <div className="flex justify-evenly items-center gap-4 md:hidden">
        <p>
          <AlignJustify onClick={toggleDashMenu} className="cursor-pointer" />
        </p>
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      {/* <div className="hidden md:block">
        <Navbar />
      </div> */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10 mt-4">
        <div
          className={`hidden md:flex ${openDashboardMenu ? "md:block" : ""}`}
        >
          <Sidebar />
        </div>
        <main className="flex-grow p-4 mt-20">{children}</main>
      </div>

      {openDashboardMenu && (
        <div className="md:hidden fixed inset-0 z-10">
          <div className="relative w-64 h-full bg-black bg-opacity-50">
            <div className="absolute top-2 right-2">
              <X
                size={24}
                className="cursor-pointer"
                onClick={() => setOpenDashboardMenu(false)}
              />
            </div>
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
