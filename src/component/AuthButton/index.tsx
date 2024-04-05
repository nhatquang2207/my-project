import ListMovie from "./listMovie";

const Indexx = () => {
  return (
    <div>
      <div className="flex justify-end space-x-10">
        <button className=" border-2 p-3 py-2 text-blue-600 border-blue-500  font-bold">
          Login
        </button>
        <button className="border-2 p-3 py-2 text-blue-600 border-blue-500  font-bold">
          Register
        </button>
      </div>
      <div className="ml-6 mt-10">
        <h1 className="font-bold text-blue-600 text-3xl">
          #1 FREE Online Movie Streamming Site in Vietnam
        </h1>
        <h2 className="mt-10 border-b pb-6 border-lime-300 text-blue-600 font-medium text-2xl opacity-90">
          Trending
        </h2>

        <div className="pt-10 ">
          <ListMovie />
        </div>
        <div className="pt-6 flex justify-center  ">
          <button className=" p-2 rounded-lg bg-blue-950 text-white hover:bg-slate-200 hover:text-black">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Indexx;
