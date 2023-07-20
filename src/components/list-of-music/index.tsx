import searchIcon from "@/assets/search.svg";
import MusicCard from "../music-card";
import { GetSong } from "@/types";
import { useContext } from "react";
import { AppContext, SongContext } from "@/context/songContext";
import Loading from "./loading";

interface ListOfSongsProps {
  loading: boolean;
  setPlaylist: () => void;
  songs: GetSong[];
}

const ListOfSongs = ({ loading, setPlaylist, songs }: ListOfSongsProps) => {
  const { setCurrentSongHandler, currentSong } = useContext(
    AppContext
  ) as SongContext;

  const selectSong = (index: number) => {
    setCurrentSongHandler(songs[index]);
    setPlaylist();
  };

  
  return (
    <div className="min-h-[0] overflow-y-auto lg:col-start-2 lg:col-end-3 hide-scrollbar lg:row-start-2 lg:row-end-3 row-start-5 row-end-6">
      <div className="flex items-center rounded-lg bg-[#ffffff14] px-4 py-2 gap-x-2">
        <input
          className="bg-transparent border-none outline-none text-lg text-white flex-1"
          placeholder="Search Song, Artist"
        />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="mt-[25px] space-y-3">
        {loading && <Loading />}
        {songs?.map((item, i) => (
          <MusicCard
            key={item._id}
            song={item}
            selectSong={selectSong}
            indexOfSong={i}
            active={item._id === currentSong?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ListOfSongs;
