import { ChangeEvent } from "react";

interface ProgressProps {
  time: number;
  duration: number;
  handleSeek: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Progress = ({ duration, handleSeek, time }: ProgressProps) => {
  return (
    <div className="w-full">
      <input
        type="range"
        value={time}
        max={duration}
        className="seek-bar"
        onChange={handleSeek}
      />
    </div>
  );
};

export default Progress;
