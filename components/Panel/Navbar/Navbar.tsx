"use client";

import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import Link from "next/link";
import { BiChevronDown, BiSolidUserCircle } from "react-icons/bi";
import NavLinks from "./NavLinks";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { MdLogout } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="border-gray-200 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-8">
        <Link href="/panel" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Homelab logo in navbar"
            className="h-18 mr-3 cursor-pointer"
            width={270}
            placeholder="blur"
            blurDataURL="/images/logo.png"
            height={180}
          />
        </Link>
        <div className="hidden w-full md:flex md:w-auto [&>*]:text-white">
          <NavLinks />
          <div className="cursor-pointer ml-28">
            <Dropdown className="bg-ultraViolet/20 backdrop-filter backdrop-blur-lg text-white [&>*]:text-white">
              <DropdownTrigger>
                <div className="flex items-center">
                  <Avatar
                    showFallback
                    name="Ibrahim Okić"
                    src="https://images.unsplash.com/broken"
                  />
                  <span className="text-white ml-4">Ibrahim Okić</span>
                  <BiChevronDown className="text-white ml-1" />
                </div>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Dropdown menu with icons"
                className="hover:text-white"
                variant="light"
              >
                <DropdownItem
                  className="hover:text-white [&>*]:hover:text-gray-300 [&>*]:duration-500 [&>*]:transition"
                  startContent={
                    <BiSolidUserCircle className="text-xl text-gray-300 pointer-events-none flex-shrink-0" />
                  }
                >
                  Profile
                </DropdownItem>
                <DropdownItem
                  className="hover:text-white [&>*]:hover:text-gray-300 [&>*]:duration-500 [&>*]:transition"
                  startContent={
                    <TbSettings className="text-xl text-gray-300 pointer-events-none flex-shrink-0" />
                  }
                >
                  Settings
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    router.push("/auth/login");
                    signOut();
                  }}
                  className="hover:text-white [&>*]:hover:text-gray-300 [&>*]:duration-500 [&>*]:transition"
                  startContent={
                    <MdLogout className="text-xl text-gray-300 pointer-events-none flex-shrink-0" />
                  }
                >
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
