import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsHouseUp } from "react-icons/bs";
import { MdOutlineBedroomParent, MdOutlineDevices } from "react-icons/md";

const links = [
  {
    name: "Nadzorna ploča",
    icon: <AiOutlineDashboard className="w-5 h-5 mr-2" />,
    href: "/panel",
  },
  {
    name: "Kuće",
    icon: <BsHouseUp className="w-5 h-5 mr-2" />,
    href: "/houses",
  },
  {
    name: "Prostorije",
    icon: <MdOutlineBedroomParent className="w-5 h-5 mr-2" />,
    href: "/rooms",
  },
  {
    name: "Uređaji",
    icon: <MdOutlineDevices className="w-5 h-5 mr-2" />,
    href: "/devices",
  },
];

const NavLinks: React.FC = () => {
  const path = usePathname();
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 items-center mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={`flex items-center py-2 pl-3 pr-4 text-white ${
              path !== link.href ? "" : "border-b-2 border-lavender/50 rounded"
            } md:bg-transparent md:p-0 transition duration-500 hover:text-lavender`}
          >
            {link.icon}
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
