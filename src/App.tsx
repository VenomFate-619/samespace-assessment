import ListOfSongs from "@/components/list-of-music";
import MusicPlayer from "./components/music-player";
import SideBar from "./components/sidebar";
import { useQuery } from "@apollo/client";
import { GET_SONGS } from "@/query";
import { useContext } from "react";
import { GetSong } from "./types";
import { AppContext, SongContext } from "./context/songContext";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const p = searchParams.get("playlist") ?? 1;

  const {
    setCurrentPlaylistHandler,
    setCurrentSongHandler,
    currentSong,
    currentPlaylist,
  } = useContext(AppContext) as SongContext;

  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      playlistId: Number(p),
      search: null,
    },
    onCompleted: (data) => {
      if (currentPlaylist.length === 0)
        setCurrentPlaylistHandler(data?.getSongs as GetSong[]);
      if (!currentSong) setCurrentSongHandler(data?.getSongs[0] as GetSong);
    },
  });

  const setPlaylist = () => {
    setCurrentPlaylistHandler(data?.getSongs as GetSong[]);
  };

  return (
    <>
      <div className="grid lg:grid-cols-[auto_432px_auto] grid-cols-1 lg:grid-rows-[auto_1fr]  grid-rows-[auto_auto_auto] content-start px-8 pt-[20px]">
        <SideBar />
        <p className="capitalizetize text-[32px] font-bold text-white mb-[33px] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 row-start-2 row-end-3">
          For you
        </p>
        <ListOfSongs
          loading={loading}
          setPlaylist={setPlaylist}
          songs={data?.getSongs as GetSong[]}
        />
        <MusicPlayer
          currentSong={currentSong} //TODO remove this
          key={currentSong ? currentSong._id : currentSong}
        />
      </div>
    </>
  );
}

export default App;
