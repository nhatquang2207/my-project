import { FaHome } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
interface data {
  title: string;
  icon: JSX.Element;
  hover: string;
}
const datas: data[] = [
  {
    title: "Home",
    icon: <FaHome className="w-5 h-5 ml-1" />,
    hover: " hover:bg-slate-500 c",
  },
  {
    title: "Movie",
    icon: <RiMovie2Fill className="w-5 h-5 ml-1" />,
    hover: " hover:bg-gray-500",
  },
  {
    title: "About",
    icon: <FcAbout className="w-5 h-5 ml-1" />,
    hover: " hover:bg-gray-500",
  },
];
const NavItem = () => {
  return (
    <div>
      {datas.map((item) => (
        <ul
          className={` ${item.hover}  p-2 flex justify-end items-center cursor-pointer   `}>
          <li className={`pt-2 items-center flex  `}>
            <p className="  hover:text-red-700 text-xl">{item.title}</p>
            {item.icon}
            {/* <FaHome */}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default NavItem;
