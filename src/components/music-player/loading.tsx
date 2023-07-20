import ThreeDotsIcon from "@/assets/icons/three-dots";
import PlayIcon from "@/assets/icons/play";
import PrevIcon from "@/assets/icons/prev";
import NextIcon from "@/assets/icons/next";
import SpeakerIcon from "@/assets/icons/speaker";



const Loading = () => {
  return (
    <div className="lg:mx-auto lg:sticky lg:top-8 lg:h-[660px]    lg:row-end-3 row-start-2 row-end-3 animate-pulse">
      <div className="flex flex-col text-left w-96">
        <h2 className="h-6 mb-3 bg-slate-200 rounded w-60"></h2>
        <p className="h-3 bg-slate-200 rounded w-32"></p>
      </div>

      <div className="rounded-lg bg-slate-200 lg:w-[480px] w-full lg:h-[440px] max-h-[440px] my-6 h-[350px]"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center w-full">
          <div className="h-2 bg-slate-200 rounded w-10"></div>

          <div className="flex items-center mx-4 w-full h-1 rounded-sm bg-slate-200"></div>

          <span className="h-2 bg-slate-200 rounded w-10"></span>
        </div>
        <div className="flex items-center justify-center w-full py-2 my-4">
          <ThreeDotsIcon className="w-14 h-12 text-gray-200 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />

          <div className="flex items-center justify-center w-full gap-2">
            <PrevIcon className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />

            <PlayIcon className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />

            <NextIcon className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />
          </div>

          <SpeakerIcon className="w-12 h-10 text-gray-200 p-2 rounded-full hover:bg-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
