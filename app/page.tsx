import AboutUs from "@/components/Landing/AboutUs/AboutUs";
import Benefits from "@/components/Landing/Benefits/Benefits";
import Hero from "@/components/Landing/Hero/Hero";
import Navbar from "@/components/Landing/Navbar/Navbar";
import Steps from "@/components/Landing/Setup/Setup";
import Footer from "@/components/Landing/Footer/Footer";
import Head from "next/head";
import Contact from "@/components/Landing/Contact/Contact";
import Pricing from "@/components/Landing/Pricing/Pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hackaton</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <Benefits></Benefits>
        <Steps></Steps>
        <Pricing></Pricing>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}
