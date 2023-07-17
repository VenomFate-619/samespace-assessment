import PauseIcon from "@/assets/icons/pause";
import PlayIcon from "@/assets/icons/play";
import PrevIcon from "@/assets/icons/prev";
import ThreeDotsIcon from "@/assets/icons/three-dots";

interface ControlsProps {
  isPlaying: boolean;
  handlePlay: () => void;
}

const Controls = ({handlePlay,isPlaying}:ControlsProps) => {
  return (
    <div className="flex items-center justify-center w-full py-2 my-4">
      <ThreeDotsIcon className="w-14 h-12 text-gray-200 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />
      <div className="flex items-center justify-center w-full gap-2">
        <PrevIcon className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />
        {isPlaying ? (
          <PauseIcon
            className="w-10 h-10 cursor-pointer text-black bg-white p-1 rounded-full"
            onClick={handlePlay}
          />
        ) : (
          <PlayIcon
            className="w-10 h-10 cursor-pointer text-black bg-white p-1 rounded-full"
            onClick={handlePlay}
          />
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 cursor-pointer"
        >
          <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-10 text-gray-200 p-2 rounded-full hover:bg-gray-500 cursor-pointer"
      >
        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
        <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
      </svg>
    </div>
  );
};

export default Controls;
