"use client";
import { AiOutlineFileProtect } from "react-icons/ai";
import { TbAsteriskSimple } from "react-icons/tb";
import { TbSettingsAutomation } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";

const Benefits = () => {
  return (
    <section
      className="flex-col pb-40 text-gray-600 body-font font-lexend"
      id="benefiti"
    >
      <div className="flex justify-center w-full">
        <h2 className="text-4xl font-semibold">
          What benefits does HomeLab bring to you?
        </h2>
      </div>
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
            1
          </div>
          <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
              <AiOutlineFileProtect className="p-1 text-5xl rounded-full" />
            </div>
            <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                Security
              </h2>
              <p className="leading-relaxed">
                Have control over your home at any time from any location.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
            2
          </div>
          <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
              <TbAsteriskSimple className="p-1 text-5xl rounded-full" />
            </div>
            <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                Simplicity
              </h2>
              <p className="leading-relaxed">
                The product is developed to be user-friendly for everyone{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
            3
          </div>
          <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
              <TbSettingsAutomation className="p-1 text-5xl rounded-full" />
            </div>
            <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                Automation
              </h2>
              <p className="leading-relaxed">
                Free yourself from minor tasks, let them be just one click away.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex pb-10 mx-auto sm:items-center md:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
            4
          </div>
          <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
              <BiTimeFive className="p-1 text-5xl rounded-full" />
            </div>
            <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                Time
              </h2>
              <p className="leading-relaxed">
                Have more time for yourself and your loved ones, and let your
                home take care of itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
