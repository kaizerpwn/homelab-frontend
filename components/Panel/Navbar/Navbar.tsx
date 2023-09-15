'use client'

import { useState } from 'react'
import Link from 'next/link';
import { AiFillHome } from "react-icons/ai"
import { BiDevices } from "react-icons/bi"
import { MdBedroomChild } from "react-icons/md"
import { FaQuestionCircle } from "react-icons/fa"
import { ImExit } from "react-icons/im"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { imageLoader } from '@/utils/ImageLoader';
import { signOut } from 'next-auth/react';

const Navbar = () => {
    const pathname = usePathname();
    const [menuState, setMenuState] = useState<boolean>(true);

    const handleSidebarMenu = () => setMenuState(!menuState)

    return (
        <>
            <div className="absolute flex-col justify-between hidden w-64 bg-gray-800 shadow sm:relative font-lexend md:h-full sm:flex" style={{ height: "150vh" }}>
                <div className="px-8">
                    <div className="flex items-center w-full h-16 mt-4 -ml-1">
                        <Link href="/">
                            <Image src="../images/logo.png" loader={imageLoader} alt="logo" width={300} height={200} />
                        </Link>
                    </div>
                    <ul className="mt-8">
                        <Link href="/panel">
                            <li className={pathname === '/panel' ? "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor bg-secondaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <AiFillHome className="w-6 h-6" />
                                    <span className="ml-2 text-md">Nadzorna ploča</span>
                                </div>
                            </li>
                        </Link>
                        <Link href="/panel/devices">
                            <li className={pathname === '/panel/devices' ? "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor bg-secondaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <BiDevices className="w-6 h-6" />
                                    <span className="ml-2 text-md">Uređaji</span>
                                </div>
                            </li>
                        </Link>
                        <Link href="/panel/rooms">
                            <li className={pathname === '/panel/rooms' ? "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor bg-secondaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <MdBedroomChild className="w-6 h-6" />
                                    <span className="ml-2 text-md">Prostorije</span>
                                </div>
                            </li>
                        </Link>
                        <Link href="/panel/faq">
                            <li className={pathname === '/panel/faq' ? "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor bg-secondaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" >
                                    <FaQuestionCircle className="w-6 h-6" />
                                    <span className="ml-2 text-md">FAQ</span>
                                </div>
                            </li>
                        </Link>
                        <div onClick={() => signOut({ callbackUrl: "/auth/login" })}>
                            <li className={pathname === '/' ? "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor bg-secondaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-3 text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-secondaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <ImExit className="w-6 h-6" />
                                    <span className="ml-2 text-md">Odjava</span>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className={menuState ? "absolute z-40 flex-col justify-between transition duration-150 ease-in-out bg-gray-800 shadow md:h-full sm:hidden" : "absolute z-40 flex-col justify-between transition duration-150 w-64 ease-in-out bg-gray-800 shadow md:h-full sm:hidden"} id="mobile-nav">
                <button aria-label="toggle sidebar" id="openSideBar" className="absolute right-0 flex items-center justify-center w-10 h-10 mt-16 -mr-10 bg-gray-800 rounded rounded-tr rounded-br shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="6" cy="10" r="2" />
                        <line x1="6" y1="4" x2="6" y2="8" />
                        <line x1="6" y1="12" x2="6" y2="20" />
                        <circle cx="12" cy="16" r="2" />
                        <line x1="12" y1="4" x2="12" y2="14" />
                        <line x1="12" y1="18" x2="12" y2="20" />
                        <circle cx="18" cy="7" r="2" />
                        <line x1="18" y1="4" x2="18" y2="5" />
                        <line x1="18" y1="9" x2="18" y2="20" />
                    </svg>
                </button>
                <button aria-label="Close sidebar" id="closeSideBar" className="absolute right-0 flex items-center justify-center w-10 h-10 mt-16 -mr-10 text-white bg-gray-800 rounded-tr rounded-br shadow cursor-pointer" onClick={handleSidebarMenu}>
                    {!menuState ?
                        (
                            <IoMdClose />
                        ) :
                        (
                            <GiHamburgerMenu />
                        )}
                </button>
                <div className={menuState ? "hidden" : "px-8"} style={{ height: "100vh" }}>
                    <div className="flex items-center w-full h-16">
                        <div className="text-2xl font-bold text-white">Logo</div>
                    </div>
                    <ul className="mt-12">
                        <Link href="/panel">
                            <li className={pathname === '/panel' ? "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor bg-primaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <AiFillHome className="w-6 h-6" />
                                    <span className="ml-2 text-sm">Nadzorna ploča</span>
                                </div>
                            </li>
                        </Link>
                        <Link href="/panel/devices">
                            <li className={pathname === '/panel/devices' ? "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor bg-primaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <BiDevices className="w-6 h-6" />
                                    <span className="ml-2 text-sm">Uređaji</span>
                                </div>
                            </li>
                        </Link>
                        <Link href="/panel/rooms">
                            <li className={pathname === '/panel/rooms' ? "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor bg-primaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" >
                                    <MdBedroomChild className="w-6 h-6" />
                                    <span className="ml-2 text-sm">Sobe</span>
                                </div>
                            </li>
                        </Link>
                        <Link href="/panel/faq">
                            <li className={pathname === '/panel/faq' ? "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor bg-primaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <FaQuestionCircle className="w-6 h-6" />
                                    <span className="ml-2 text-sm">FAQ</span>
                                </div>
                            </li>
                        </Link>
                        <Link href="/">
                            <li className={pathname === '/logout' ? "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor bg-primaryColor" : "flex items-center justify-between w-full px-4 py-2 mb-6 font-bold text-gray-100 duration-100 ease-in cursor-pointer rounded-xl hover:bg-primaryColor"}>
                                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <ImExit className="w-6 h-6" />
                                    <span className="ml-2 text-sm">Odjava</span>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar