'use client'

import Image, { ImageLoaderProps } from "next/image";

const Steps = () => {

  const imageLoader = ({ src }: ImageLoaderProps) => {
    return src;
  }


  return (
    <section className="pb-40 text-gray-600 body-font font-lexend" id="instalacija">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <h2 className="mb-10 text-4xl font-semibold">Kako Instalirati?</h2>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-black title-font">KORAK 1</h2>
                <p className="leading-relaxed">Izvadite Homelab Hub iz kutije i pronađite centralnu lokaciju u vašem domu gdje će Hub imati najbolju konekciju sa vašim pametnim uređajima.</p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">KORAK 2</h2>
                <p className="leading-relaxed">Povežite Hub sa strujom i Ethernet kablom sa vašim routerom/modemom.</p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">KORAK 3</h2>
                <p className="leading-relaxed">Preuzmite i instalirajte Homelab aplikaciju na vaš pametni telefon ili tablet.</p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">KORAK 4</h2>
                <p className="leading-relaxed">Kreirajte Homelab nalog i uparite vaše pametne uređaje sa Hub-om koristeći aplikaciju.</p>
              </div>
            </div>
            <div className="relative flex">
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">ZADNJI KORAK</h2>
                <p className="leading-relaxed">Prilagodite vaše postavke i preference pametnog doma i uživajte u kontroli i praktičnosti vašeg automatizovanog pametnog doma sa Homelab-om.</p>
              </div>
            </div>
          </div>
          <div className="flex-col w-full my-auto overflow-hidden rounded-lg lg:w-3/5">
            <Image loader={imageLoader} className="w-full mx-auto my-auto md:w-2/3" src="images/Landing/setup.png" alt="hero image smart home" width={600} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
