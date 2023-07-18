import { ChangeEvent, useEffect, useRef, useState } from "react";
import Progress from "./progress";
import Controls from "./controls";
import { GetSong } from "@/types";



const MusicPlayer = ({ currentSong }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  // const [mute, SetMute] = useState(false);
  const [time, setTime] = useState(0);

  const handlePlay = () => {
    if (audioRef?.current) {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        void audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleTimeUpdate = () => {
    setTime(audioRef.current?.currentTime ?? 0);
  };

  const handleMetaData = () => {
    setDuration(audioRef.current?.duration ?? 0);
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setTime(value);
    if (audioRef.current) audioRef.current.currentTime = value;
  };

  if (!currentSong) return <p className="text-red-600">Loading</p>;

  return (
    <div className="lg:mx-auto lg:sticky lg:top-8 lg:h-[660px]   row-start-1 lg:row-end-3 row-end-2">
      <p className="text-[32px]  font-bold leading-[36px] text-white">
        {currentSong?.title}
      </p>
      <p className="text-base text-secondary mt-2 mb-4">{currentSong?.title}</p>
      <img
        src={currentSong?.photo}
        alt={currentSong?.title}
        className="lg:w-[480px] w-full lg:h-[440px] max-h-[440px] rounded-lg"
      />
      <Progress duration={duration} time={time} handleSeek={handleSeek} />

      <Controls handlePlay={handlePlay} isPlaying={isPlaying} />

      <audio
        ref={audioRef}
        src={currentSong?.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMetaData}
      />
    </div>
  );
};

export default MusicPlayer;
