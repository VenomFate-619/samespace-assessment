import ListOfSongs from "@/components/list-of-music";
import MusicPlayer from "./components/music-player";
import SideBar from "./components/sidebar";

function App() {
  return (
    <>
      <div className="grid grid-cols-[auto_432px_auto] content-start px-8 pt-[20px]">
        <SideBar />
        <p className="capitalizeti text-[32px] font-bold text-white mb-[33px] col-start-2 col-end-3">
          For you
        </p>
        <ListOfSongs />
        <MusicPlayer />
      </div>
    </>
  );
}

export default App;
