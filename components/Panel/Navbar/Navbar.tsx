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
        <div className="hidden w-full md:flex md:w-auto">
          <NavLinks />
          <div className="cursor-pointer ml-28">
            <Dropdown className="bg-gradient-to-r from-gray-700 to-gray-800/90 text-white">
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
                  startContent={
                    <BiSolidUserCircle className="text-xl text-gray-300 pointer-events-none flex-shrink-0 hover:text-white" />
                  }
                >
                  Profile
                </DropdownItem>
                <DropdownItem
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
