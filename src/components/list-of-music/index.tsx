import searchIcon from "@/assets/search.svg";
import MusicCard from "../music-card";

const ListOfSongs = () => {
  return (
    <div className="min-h-[0] overflow-y-auto col-start-2 col-end-3 hide-scrollbar">
      <div className="flex items-center rounded-lg bg-[#ffffff14] px-4 py-2 gap-x-2">
        <input
          className="bg-transparent border-none outline-none text-lg text-white flex-1"
          placeholder="Search Song, Artist"
        />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="mt-[25px]">
        {[...Array(4)].map((x, i) => (
          <MusicCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ListOfSongs;
