import searchIcon from "@/assets/search.svg";
import MusicCard from "../music-card";
import { useQuery } from "@apollo/client";
import { GET_SONGS } from "@/query";

const ListOfSongs = () => {
  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      playlistId: 1,
      search: null,
    },
  });
  if (loading) return <p className="text-red-600">Loading</p>;
  console.log(data);

  return (
    <div className="min-h-[0] overflow-y-auto lg:col-start-2 lg:col-end-3 hide-scrollbar lg:row-start-2 lg:row-end-3 row-start-3 row-end-4">
      <div className="flex items-center rounded-lg bg-[#ffffff14] px-4 py-2 gap-x-2">
        <input
          className="bg-transparent border-none outline-none text-lg text-white flex-1"
          placeholder="Search Song, Artist"
        />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="mt-[25px]">
        {data?.getSongs.map((item, i) => (
          <MusicCard key={i}  song={item} />
        ))}
      </div>
    </div>
  );
};

export default ListOfSongs;
