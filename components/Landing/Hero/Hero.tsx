"use client";

import { FaMedal } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="text-gray-600 bg-white body-font font-lexend"
      id="pocetna"
    >
      <div
        className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row"
        id="pocetnaSekcija"
      >
        <div className="w-5/6 mb-10 lg:max-w-3xl lg:w-full md:w-full md:mb-0">
          <Image
            className="object-cover object-center rounded-3xl"
            alt="hero image smart home"
            src="/images/Landing/hero.png"
            width={1000}
            height={600}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 title-font lg:text-xl xl:text-4xl font-lexend">
            HomeLab - Let your home become smart.
          </h1>
          <p className="mb-8 text-lg leading-relaxed font-lexend">
            With our hub your home becomes smart in just 5 simple installation
            steps.
          </p>
          <div className="items-end justify-center w-full mb-5 flex-nowrap lg:flex-wrap xl:flex-nowrap lg:flex md:justify-start">
            <div className="w-full mx-auto mr-4 md:mx-1 sm:w-full xl:w-1/2">
              <label className="text-sm leading-7 text-gray-600 md:mr-0 sm:mr-2 md:pl-2 xl:w-1/2 font-lexend">
                Subscribe to our newsletter.
              </label>
              <input
                type="text"
                id="hero-field"
                placeholder="Email"
                name="hero-field"
                className="px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded-full outline-none xl:w-full lg:w-2/3 focus:ring-2 focus:ring-primaryColor focus:bg-transparent focus:border-primaryColor"
              />
            </div>
            <button className="inline-flex px-6 py-2 mt-2 mr-4 text-lg rounded-full xl:mt-0 btn font-lexend">
              Subscribe
            </button>
          </div>
          <div className="flex lg:flex-row md:flex-col">
            <button className="inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <span className="mb-1 text-xs text-gray-600">Download</span>
                <span className="font-medium title-font">Google Play</span>
              </span>
            </button>
            <button className="inline-flex items-center px-5 py-3 mt-0 ml-4 bg-gray-100 rounded-lg lg:ml-4 md:ml-0 md:mt-4 lg:mt-0 hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <span className="mb-1 text-xs text-gray-600">Download</span>
                <span className="font-medium title-font">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-between -m-4 text-center">
          <div className="w-1/2 p-4 space-y-5 md:w-1/5 rounded-3xl">
            <FaMedal className="mx-auto text-5xl text-secondaryColor"></FaMedal>
            <p className="font-semibold leading-relaxed text-black md:text-xl">
              Professional service
            </p>
            <p className="text-black">
              The professional service provided by this program facilitates and
              speeds up life processes through an intuitive interface.
            </p>
          </div>
          <div className="w-1/2 p-4 space-y-5 md:w-1/5 rounded-3xl">
            <IoIosTime className="mx-auto text-5xl text-secondaryColor"></IoIosTime>
            <p className="font-semibold leading-relaxed text-black md:text-xl">
              24/7 Support
            </p>
            <p className="text-black">
              Providing 24/7 support that allows users to always stay connected
              and get quick and efficient assistance.
            </p>
          </div>
          <div className="w-1/2 p-4 space-y-5 md:w-1/5 rounded-3xl">
            <BiWorld className="mx-auto text-5xl text-secondaryColor"></BiWorld>
            <p className="font-semibold leading-relaxed text-black md:text-xl">
              Availability Across the Region
            </p>
            <p className="text-black">
              Availability across the region allows users to manage their home
              devices from anywhere in the region.
            </p>
          </div>
          <div className="w-1/2 p-4 space-y-5 md:w-1/5 rounded-3xl">
            <BsLightningChargeFill className="mx-auto text-5xl text-secondaryColor"></BsLightningChargeFill>
            <p className="font-semibold leading-relaxed text-black md:text-xl">
              Fast Installation
            </p>
            <p className="text-black">
              Installation without the need for a lengthy installation process
              or configuration with minimal effort and without technical
              knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
