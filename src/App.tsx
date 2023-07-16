import ListOfSongs from "@/components/list-of-music";
import MusicPlayer from "./components/music-player";
import SideBar from "./components/sidebar";

function App() {
  return (
    <>
      <div className="grid lg:grid-cols-[auto_432px_auto] grid-cols-1 lg:grid-rows-[auto_1fr]  grid-rows-[auto_auto_auto] content-start px-8 pt-[20px]">
        <SideBar />
        <p className="capitalizetize text-[32px] font-bold text-white mb-[33px] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 row-start-2 row-end-3">
          For you
        </p>
        <ListOfSongs />
        <MusicPlayer />
      </div>
    </>
  );
}

export default App;
