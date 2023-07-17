import PauseIcon from "@/assets/icons/pause";
import PlayIcon from "@/assets/icons/play";
import PrevIcon from "@/assets/icons/prev";
import ThreeDotsIcon from "@/assets/icons/three-dots";
import { ChangeEvent, useRef, useState } from "react";
import Progress from "./progress";
import Controls from "./controls";

const url =
  "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [duration, setDuration] = useState(0);
  const [mute, SetMute] = useState(false);
  const [time, setTime] = useState(0);

  const handlePlay =  () => {
    if (audioRef?.current) {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
         audioRef.current.play();
      }
    }
  };

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

  return (
    <div className="lg:mx-auto lg:sticky lg:top-8 lg:h-[660px]   row-start-1 lg:row-end-3 row-end-2">
      <p className="text-[32px]  font-bold leading-[36px] text-white">
        Viva La Vida
      </p>
      <p className="text-base text-secondary mt-2 mb-4">Coldplay</p>
      <img
        src="https://i.scdn.co/image/ab67616d0000b2736a6a889eef62af7b190ec713"
        alt="fwe"
        className="lg:w-[480px] w-full lg:h-[440px] max-h-[440px] rounded-lg"
      />
      <Progress duration={duration} time={time} handleSeek={handleSeek} />

      <Controls handlePlay={handlePlay} isPlaying={isPlaying} />

      <audio
        autoPlay
        ref={audioRef}
        src="https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMetaData}
      />
    </div>
  );
};

export default MusicPlayer;
