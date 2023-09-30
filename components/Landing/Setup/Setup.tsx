"use client";

import Image from "next/image";

const Steps = () => {
  return (
    <section
      className="pb-40 text-gray-600 body-font font-lexend"
      id="instalacija"
    >
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <h2 className="mb-10 text-4xl font-semibold">How to use?</h2>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-black title-font">
                  STEP 1
                </h2>
                <p className="leading-relaxed">
                  Take out the HomeLab Hub from the box and find a central
                  location in your home where the Hub will have the best
                  connection with your smart devices.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">
                  STEP 2
                </h2>
                <p className="leading-relaxed">
                  Connect the Hub to power and with an Ethernet cable to your
                  router/modem.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">
                  STEP 3
                </h2>
                <p className="leading-relaxed">
                  Download and install the HomeLab application on your
                  smartphone or tablet.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">
                  STEP 4
                </h2>
                <p className="leading-relaxed">
                  Create a HomeLab account and pair your smart devices with the
                  Hub using the application.
                </p>
              </div>
            </div>
            <div className="relative flex">
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">
                  LAST STEP
                </h2>
                <p className="leading-relaxed">
                  Customize your smart home settings and preferences, and enjoy
                  the control and convenience of your automated smart home with
                  HomeLab.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col w-full my-auto overflow-hidden rounded-lg lg:w-3/5">
            <Image
              className="w-full mx-auto my-auto md:w-2/3"
              src="images/Landing/setup.png"
              unoptimized
              alt="hero image smart home"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
