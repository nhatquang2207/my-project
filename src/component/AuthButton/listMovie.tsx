import batman_begins from "../../image/batman_begins.jpg";

interface movie {
  img: string;
  title: string;
  main: string;
  time: number;
}
const list: movie[] = [
  {
    img: batman_begins,
    title: "Batman",
    main: "Christian Bale",
    time: 180,
  },
  {
    img: batman_begins,
    title: "Batman",
    main: "Christian Bale",
    time: 180,
  },
  {
    img: batman_begins,
    title: "Batman",
    main: "Christian Bale",
    time: 180,
  },
  {
    img: batman_begins,
    title: "Batman",
    main: "Christian Bale",
    time: 180,
  },
  {
    img: batman_begins,
    title: "Batman",
    main: "Christian Bale",
    time: 180,
  },
  {
    img: batman_begins,
    title: "Batman",
    main: "Christian Bale",
    time: 180,
  },
];
const ListMovie = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5  ">
      {list.map((item) => (
        <div className="  bg-blue-500 relative rounded-xl  shadow-lg hover:shadow-blue-700 overflow-hidden">
          <img className=" w-full " src={item.img} alt="" />
          <p className="absolute right-2 bottom-20 rounded-xl shadow-lg p-2 bg-cyan-100">
            {item.time}p
          </p>
          <div className="p-1 ml-6 text-white text-xl">
            <p className="text-xl">{item.title}</p>
            <p className="text-lg">{item.main}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListMovie;
