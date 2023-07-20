import spotify_logo from "@/assets/spotify-logo.svg";
import profile from "@/assets/profile.png";
import { Link } from "react-router-dom";
import { navLinks } from "@/constant/navLinks";
import { useState } from "react";
import { mergeClassName } from "@/utils";
import { useSearchParams } from "react-router-dom";
import { playlistName } from "@/constant/navLinks";

const SideBar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get("playlist") ?? 1;

  const navStyle = menuClick
    ? "opacity-1 max-h-screen transition-all duration-700"
    : "max-lg:opacity-0 max-lg:max-h-0 transition-all duration-700";

  return (
    <div className="flex lg:flex-col  text-center justify-between row-start-1 lg:row-end-3 row-end-2 text-white lg:sticky lg:top-8 lg:h-[calc(100vh-32px)] lg:py-0 py-4 lg:px-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-center ">
          <img src={spotify_logo} alt="spotify_logo" />
        </div>
        <nav className={`text-left h-full ${navStyle}`}>
          <ul className="flex flex-col py-7 space-y-4">
            {navLinks.map((item) => (
              <Link
                to={item.url}
                className={mergeClassName(
                  "text-base font-normal opacity-40 hover:opacity-100 cursor-pointer duration-500 focus-visible:opacity-100 focus-visible:outline-none focus:outline-none outline-none",
                  playlistName[Number(playlistId) - 1] === item.text &&
                    "opacity-100"
                )}
                key={item.text}
              >
                {item.text}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div className="h-12 w-12 my-4 hidden lg:block ">
          <img src={profile} alt="profile" />
        </div>
        <label
          htmlFor="check"
          className="menu"
          
        >
          <input type="checkbox" id="check" onChange={() => setMenuClick((prev) => !prev) } />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default SideBar;
