import spotify_logo from "@/assets/spotify-logo.svg";
import profile from "@/assets/profile.png";
import { NavLink } from "react-router-dom";
import {navLinks} from '@/constant/navLinks'


const SideBar = () => {
  return (
    <div className="lg:flex hidden lg:flex-col text-center justify-between row-start-1 row-end-3 text-white sticky top-8 h-[calc(100vh-32px)]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center ">
          <img src={spotify_logo} alt="spotify_logo" />
        </div>
        <nav className="text-left h-full">
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
      <div className="h-12 w-12 my-4">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default SideBar;
