// src/components/TopBar/TopBar.jsx
import React, { useState } from "react";
import { Menu, Github, X } from "lucide-react";

const TopBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menues = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Me",
      link: "/Resume",
    },
    {
      title: "Achievements",
      link: "/achievements",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
  ];
  return (
    <div className="sticky top-0 z-90 bg-black">
      {/* Thanh topbar */}
      <div className="py-5 flex justify-between items-center">
        <div>
          <img src="/logo.jpg" alt="logo" className="h-10 w-10 rounded-full" />
        </div>

        <div className="flex items-center gap-2">
          {/* Github */}
          <div
            className="cursor-pointer hover:bg-[#242424] px-3 py-2 rounded-lg"
            onClick={() =>
              window.open("https://github.com/MinhHung7", "_blank")
            }
          >
            <Github className="text-white h-5 w-5 rounded-full" />
          </div>

          {/* Hire me */}
          <div className="cursor-pointer bg-[#3cc88a] text-white text-sm px-3 py-2 rounded-lg shadow">
            Hire me
          </div>

          {/* Menu toggle */}
          <div
            className="cursor-pointer hover:bg-[#242424] px-3 py-2 rounded-lg"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <X className="text-white h-5 w-5 rounded-full" />
            ) : (
              <Menu className="text-white h-5 w-5 rounded-full" />
            )}
          </div>
        </div>
      </div>

      {/* Menu panel - hiển thị bên dưới thanh topbar */}
      {openMenu && (
        <div className="absolute right-0 w-40 bg-[#1a1a1a] rounded-lg shadow-lg animate-fadeIn">
          <ul className="flex flex-col gap-4 text-sm text-white p-4">
            {menues.map((menu, index) => (
              <li
                key={index}
                className="px-2 text-left cursor-pointer hover:text-[#3cc88a]"
                onClick={() => setOpenMenu(false)}
              >
                {menu.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopBar;
