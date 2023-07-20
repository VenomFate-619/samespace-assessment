import spotify_logo from "@/assets/spotify-logo.svg";
import profile from "@/assets/profile.png";
import { NavLink } from "react-router-dom";
import { navLinks } from "@/constant/navLinks";
import { useState } from "react";

const SideBar = () => {
  const [menuClick, setMenuClick] = useState(false);
  return (
    <div className="flex lg:flex-col  text-center justify-between row-start-1 lg:row-end-3 row-end-2 text-white lg:sticky lg:top-8 lg:h-[calc(100vh-32px)] lg:py-0 py-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-center ">
          <img src={spotify_logo} alt="spotify_logo" />
        </div>
        <nav className="text-left h-full hidden lg:block">
          <ul className="flex flex-col py-7 space-y-4">
            {navLinks.map((item) => (
              <NavLink
                to={item.url}
                className="text-base font-normal  opacity-40 hover:opacity-100 cursor-pointer duration-500"
                key={item.text}
              >
                {item.text}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div className="h-12 w-12 my-4 hidden lg:block ">
          <img src={profile} alt="profile" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10  lg:hidden cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default SideBar;
