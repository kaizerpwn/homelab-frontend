"use client"

import Image from "next/image"

export default function Preloader() {
    return (
        <div className="h-full w-full" style={{ height: "100vh" }}>
            <div className="flex justify-center items-center h-full w-full">
                <Image
                    src="/images/logo.png"
                    alt="Homelab logo in navbar"
                    className="h-32 mr-3 items-center animate-pulse my-auto"
                    width={400}
                    height={180}
                />
            </div>
        </div>
    )
}