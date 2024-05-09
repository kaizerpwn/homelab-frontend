"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { imageLoader } from "@/utils/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import BackgroundEffects from "@/components/Particles/BackgroundEffects";

export default function Login() {
  const [texts, setTexts] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value][0] }));
  };

  const handleSignIn = async (e: React.KeyboardEvent | React.MouseEvent) => {
    try {
      const res = await signIn("credentials", {
        email: texts.email,
        password: texts.password,
        callbackUrl: "/panel",
      });
      if (res?.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if ((e as React.KeyboardEvent).keyCode === 13) {
      handleSignIn(e as React.KeyboardEvent);
    }
  };

  return (
    <>
      <BackgroundEffects />
      <main
        className="flex items-center justify-center relative"
        style={{ height: "100vh" }}
      >
        <div className="w-full max-w-md p-4 mx-auto rounded-md shadow sm:p-8 bg-gray-700 text-white">
          <Image
            loader={imageLoader}
            className="flex justify-center object-cover object-center mx-auto rounded-3xl"
            alt="HomeLab logotype on sign in page"
            src="/images/logo.png"
            unoptimized
            width={300}
            height={200}
          />
          <h2 className="mb-3 text-3xl font-semibold text-center">Sign in</h2>
          <p className="text-sm text-center dark:text-gray-400">
            Don&apos;t have account?
            <Link
              href="/auth/register"
              rel="noopener noreferrer"
              className="focus:underline hover:underline"
            >
              {" "}
              Register
            </Link>
          </p>
          <div className="flex items-center w-full my-4"></div>
          <form className="space-y-8 ng-untouched ng-pristine ng-valid">
            <input name="csrfToken" type="hidden" />
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourmail@homelab.com"
                  onKeyDown={handleEnter}
                  value={texts.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md border-gray-800/40 bg-gray-800/40 text-gray-200 outline-none"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Password</label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot your password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  onKeyDown={handleEnter}
                  value={texts.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md border-gray-800/40 bg-gray-800/40  text-gray-200 outline-none"
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold duration-500 rounded-md bg-secondaryColor hover:bg-violet-400"
              onClick={(e: React.MouseEvent) => handleSignIn(e)}
            >
              Sign in
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
