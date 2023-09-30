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

const Navbar: React.FC = () => {
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
            <Dropdown>
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
                variant="faded"
              >
                <DropdownItem
                  startContent={
                    <BiSolidUserCircle className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
                  }
                >
                  Profile
                </DropdownItem>
                <DropdownItem
                  startContent={
                    <TbSettings className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
                  }
                >
                  Settings
                </DropdownItem>
                <DropdownItem
                  onClick={() => signOut()}
                  startContent={
                    <MdLogout className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
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
