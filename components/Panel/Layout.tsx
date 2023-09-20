"use client";

import Navbar from "./Navbar/Navbar";
import React, { PropsWithChildren } from "react";

export default function PanelLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <main className="h-full relative">
        <div className="w-full h-full">
          <Navbar />
          <div className="container w-11/12 h-64 px-6 py-3 mx-auto md:w-[90%]">
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
