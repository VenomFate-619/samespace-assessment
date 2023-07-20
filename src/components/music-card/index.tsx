import { GetSong } from "@/types";

interface MusicCardProps {
  song: GetSong;
  selectSong: (index: number) => void;
  indexOfSong: number;
  active: boolean;
}

const MusicCard = ({
  song,
  selectSong,
  indexOfSong,
  active,
}: MusicCardProps) => {
  return (
    <button
      className={
        "flex justify-between items-center text-white p-4 w-full rounded-lg hover:bg-tertiary focus-visible:bg-tertiary focus-visible:outline-none " +
        (active ? "bg-tertiary" : "")
      }
      onClick={() => {
        selectSong(indexOfSong);
      }}
    >
      <div className="flex gap-x-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={song.photo}
          alt={song.title}
        />
        <div className="flex flex-col items-start">
          <p className="text-lg">{song.title}</p>
          <p className="text-secondary text-sm">{song.artist}</p>
        </div>
      </div>
      <p className="text-lg text-secondary">
        {song.duration.toString().slice(0, 1) +
          ":" +
          song.duration.toString().slice(1)}
      </p>
    </button>
  );
};

export default MusicCard;
