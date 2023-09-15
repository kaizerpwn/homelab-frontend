'use client'

import { imageLoader } from "@/utils/ImageLoader";
import Image, { ImageLoaderProps } from "next/image";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-secondaryColor font-lexend">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex flex-wrap flex-grow order-first -mb-10 text-center md:pr-20 md:text-left">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-lg font-semibold tracking-widest text-white title-font">O Nama</h2>
            <p className="mb-2 text-white">HomeLab pojednostavljuje vaš život čineći vaš dom pametnim i potpuno automatizovanim. </p>
            <Image loader={imageLoader} className="object-cover object-center w-1/2 m-auto md:m-0" alt="hero image smart home" src={`images/logo-white.png`} width={10} height={10} />
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-lg font-semibold tracking-widest text-white title-font">Navigacija</h2>
            <nav className="mb-10 space-y-2 list-none">
              <li>
                <a className="text-white" href="#pocetna">Početna</a>
              </li>
              <li>
                <a className="text-white" href="#pocetna">O Nama</a>
              </li>
              <li>
                <a className="text-white" href="#pocetna">Benefiti</a>
              </li>
              <li>
                <a className="text-white" href="#pocetna">Instalacija</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-lg font-semibold tracking-widest text-white title-font">Kontakt Info</h2>
            <nav className="mb-10 space-y-2 text-white list-none">
              <li className="flex">
                <div className="w-2/4">
                  <p className="font-semibold">Email:</p>
                </div>
                <div>
                  <p>info@homelab.ba</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-2/4">
                  <p className="font-semibold">Broj telefona:</p>
                </div>
                <div>
                  <p>062 590 027</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-2/4">
                  <p className="font-semibold">Adresa:</p>
                </div>
                <div>
                  <p>Trg Soli, Tuzla 75000, BiH</p>
                </div>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">All Rights Reserved 2023 | Innov8
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
