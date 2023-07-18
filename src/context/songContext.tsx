import { GetSong } from "@/types";
import { createContext, useState } from "react";

export interface SongContext {
  currentSong: GetSong | null;
  setCurrentSongHandler: (song: GetSong) => void;
  currentPlaylist: GetSong[];
  setCurrentPlaylistHandler: (playlist: GetSong[]) => void;
  //   duration: 0,
  //   setDurationHandler: () => {},
  //   currentTime: "",
  //   setCurrentTimeHandler: () => {},
  //   isPlaying: false,
  //   setIsPlayingHandler: () => {},
  //   background: "",
  //   setBackgroundHandler: () => {},
}

export const AppContext = createContext<SongContext | null>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSong, setCurrentsong] = useState<GetSong | null>(null);
  const [currentPlaylist, setCurrentPlaylist] = useState<GetSong[]>([]);

  const setCurrentSongHandler = (song: GetSong) => {
    setCurrentsong(song);
  };

  const setCurrentPlaylistHandler = (playlist: GetSong[]) => {
    setCurrentPlaylist(playlist);
  };

  const value = {
    currentSong,
    setCurrentSongHandler,
    currentPlaylist,
    setCurrentPlaylistHandler,
  };

  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
};

export default AppContextProvider;
