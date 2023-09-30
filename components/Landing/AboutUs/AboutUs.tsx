"use client";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="pb-20 text-gray-600 body-font font-lexend" id="onama">
      <div className="container flex flex-wrap px-5 py-10 mx-auto">
        <div className="flex flex-wrap content-start mt-auto -mx-4 lg:w-1/2 sm:w-2/3 sm:pr-10">
          <div className="w-full px-4 mb-6 sm:p-4">
            <h1 className="mb-6 text-4xl font-medium text-gray-900 title-font">
              Want to learn more about us and our product?
            </h1>
            <div className="text-lg leading-relaxed">
              HomeLab simplifies your life by making your home smart and fully
              automated. Our central control system, HomeLab Hub, easily manages
              all your smart devices.
              <br />
              <br />
              Our offer consists of 3 packages that will, depending on the
              package you choose, turn a certain number of your household
              appliances into smart devices using the Hub Plug extension for the
              socket.
              <br />
              <br />
              And you know what else? To control your lights through our app,
              all you need is a smart bulb that automatically connects to it
              after installing HomeLab Hub.
              <br />
              <br />
              <span className="font-semibold">
                Join the smart home revolution today with HomeLab.
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex px-6 py-2 ml-2 text-lg rounded-full btn"
          >
            Contact Us
          </a>
        </div>
        <div className="w-full overflow-hidden rounded-lg lg:w-1/2 sm:mt-0">
          <Image
            className="w-full my-auto"
            alt="hero image smart home"
            src="images/Landing/aboutus.png"
            unoptimized
            width={600}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
