import searchIcon from "@/assets/search.svg";
import MusicCard from "../music-card";
import { GetSong } from "@/types";
import { useContext } from "react";
import { AppContext, SongContext } from "@/context/songContext";

interface ListOfSongsProps {
  loading: boolean;
}

const ListOfSongs = ({ loading }: ListOfSongsProps) => {
  const { setCurrentSongHandler, currentPlaylist , currentSong } = useContext(
    AppContext
  ) as SongContext;

  const selectSong = (index: number) => {
    setCurrentSongHandler(currentPlaylist[index]);
  };

  if (loading) return <p className="text-red-600">Loading</p>;

  return (
    <div className="min-h-[0] overflow-y-auto lg:col-start-2 lg:col-end-3 hide-scrollbar lg:row-start-2 lg:row-end-3 row-start-3 row-end-4">
      <div className="flex items-center rounded-lg bg-[#ffffff14] px-4 py-2 gap-x-2">
        <input
          className="bg-transparent border-none outline-none text-lg text-white flex-1"
          placeholder="Search Song, Artist"
        />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="mt-[25px]">
        {currentPlaylist.map((item, i) => (
          <MusicCard
            key={item._id}
            song={item}
            selectSong={selectSong}
            indexOfSong={i}
            active={item._id === currentSong?._id }
          />
        ))}
      </div>
    </div>
  );
};

export default ListOfSongs;
