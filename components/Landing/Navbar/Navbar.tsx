"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 text-gray-600 bg-white body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 cursor-pointer title-font md:mb-0">
          <Image
            className="z-50 object-cover object-center w-5/6 h-fullr"
            alt="hero image smart home"
            unoptimized
            src="/images/logo2.png"
            width={10}
            height={10}
          />
        </a>
        <nav className="flex flex-wrap items-center justify-center text-lg cursor-pointer md:ml-auto">
          <a href="#pocetna" className="mr-10 hover:text-gray-900 font-lexend">
            Home
          </a>
          <a href="#onama" className="mr-10 hover:text-gray-900 font-lexend">
            About us
          </a>
          <a href="#benefiti" className="mr-10 hover:text-gray-900 font-lexend">
            Benefits
          </a>
          <a
            href="#instalacija"
            className="mr-10 hover:text-gray-900 font-lexend"
          >
            Installation
          </a>
        </nav>
        <Link
          href="/auth/login"
          className="inline-flex items-center px-10 py-2 mt-4 text-xl rounded-full headerBtn md:mt-0 font-lexend"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
