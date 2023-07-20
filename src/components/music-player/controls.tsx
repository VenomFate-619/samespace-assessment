import PrevIcon from "@/assets/icons/prev";
import ThreeDotsIcon from "@/assets/icons/three-dots";
import { GetSong } from "@/types";
import { AppContext, SongContext } from "@/context/songContext";
import { useContext } from "react";
import { mergeClassName } from "@/utils";
import NextIcon from "@/assets/icons/next";
import SpeakerIcon from "@/assets/icons/speaker";

interface ControlsProps {
  isPlaying: boolean;
  handlePlay: () => void;
  currentSong: GetSong;
}

const Controls = ({ handlePlay, isPlaying, currentSong }: ControlsProps) => {
  const { currentPlaylist, setCurrentSongHandler } = useContext(
    AppContext
  ) as SongContext;

  const prevSongHandler = () => {
    const currentSongIndex = currentPlaylist
      .map((song) => song._id)
      .indexOf(currentSong._id);

    const newIndex =
      currentSongIndex === 0
        ? currentPlaylist.length - 1
        : currentSongIndex - 1;

    setCurrentSongHandler(currentPlaylist[newIndex]);
  };

  const nextSongHandler = () => {
    const currentSongIndex = currentPlaylist
      .map((song) => song._id)
      .indexOf(String(currentSong?._id) ?? 0);

    const newIndex = (currentSongIndex + 1) % currentPlaylist.length;

    setCurrentSongHandler(currentPlaylist[newIndex]);
  };

  return (
    <div className="flex items-center justify-center w-full py-2 my-4">
      <ThreeDotsIcon className="w-14 h-12 text-gray-200 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />
      <div className="flex items-center justify-center w-full gap-2">
        <PrevIcon
          className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 cursor-pointer"
          onClick={prevSongHandler}
        />

        <button
          className={mergeClassName("play-btn", isPlaying ? "" : "pause")}
          onClick={handlePlay}
        >
          <span></span>
          <span></span>
        </button>

        <NextIcon
          className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 cursor-pointer"
          onClick={nextSongHandler}
        />
      </div>
      <SpeakerIcon className="w-12 h-10 text-gray-200 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />
    </div>
  );
};

export default Controls;
