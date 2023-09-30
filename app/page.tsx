"use client";

import AboutUs from "@/components/Landing/AboutUs/AboutUs";
import Benefits from "@/components/Landing/Benefits/Benefits";
import Hero from "@/components/Landing/Hero/Hero";
import Navbar from "@/components/Landing/Navbar/Navbar";
import Steps from "@/components/Landing/Setup/Setup";
import Footer from "@/components/Landing/Footer/Footer";
import Contact from "@/components/Landing/Contact/Contact";
import Pricing from "@/components/Landing/Pricing/Pricing";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Benefits></Benefits>
      <Steps></Steps>
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
