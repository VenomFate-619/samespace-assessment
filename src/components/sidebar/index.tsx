import spotify_logo from "@/assets/spotify-logo.svg"
import profile from '@/assets/profile.png'

const SideBar = () => {
  return (
    <div className="lg:flex lg:flex-col text-center justify-between row-start-1 row-end-3 text-white sticky top-8 h-[calc(100vh-32px)]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center ">
          <img src={spotify_logo} alt="spotify_logo" />
        </div>
        <nav className="text-left h-full">
          <ul className="flex flex-col py-7 space-y-4">
            <li className="text-base font-normal  opacity-40 hover:opacity-100 cursor-pointer duration-500">
              For you
            </li>
            <li className="text-base font-normal  opacity-40 hover:opacity-100 cursor-pointer duration-500">
              Top Tracks
            </li>
            <li className="text-base font-normal  opacity-40 hover:opacity-100 cursor-pointer duration-500">
              Favourites
            </li>
            <li className="text-base font-normal  opacity-40 hover:opacity-100 cursor-pointer duration-500">
              Recently Played
            </li>
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
