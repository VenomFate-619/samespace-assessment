import ss from "@/assets/image-s.png";

const MusicCard = () => {
  return (
    <button className="flex justify-between items-center text-white p-4 w-full rounded-lg hover:bg-tertiary">
      <div className="flex gap-x-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={ss}
          alt="vwe"
        />
        <div className="flex flex-col items-start">
          <p className="text-lg">Starbiy</p>
          <p className="text-secondary text-sm">The weekend</p>
        </div>
      </div>
      <p className="text-lg text-secondary">4:16</p>
    </button>
  );
};

export default MusicCard;
