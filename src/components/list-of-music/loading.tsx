const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-between  w-full">
      {[...Array(6)].map((item) => (
        <div
          className="flex items-center justify-between my-2 w-full hover:bg-gray-600 cursor-pointer p-3 rounded-lg duration-500 animate-pulse"
          key={item}
        >
          <div className="flex items-center space-x-5">
            <div className="w-12 h-12 rounded-full bg-slate-200"></div>
            <div className="flex flex-col items-start">
              <div className="h-4 mb-2 bg-slate-200 rounded-full md:w-60 sm:w-40 w-32"></div>
              <div className="h-2 bg-slate-200 rounded-full sm:w-32 w-24"></div>
            </div>
          </div>
          <div className="h-3 bg-slate-200 rounded-full sm:w-10 w-8"></div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
