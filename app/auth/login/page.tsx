"use client";

import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { imageLoader } from "@/utils/ImageLoader";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [texts, setTexts] = useState({
    email: "",
    password: "",
  });
  const { data: session } = useSession();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value][0] }));
  };

  const handleSignIn = async () => {
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
    if (e.keyCode === 13) handleSignIn();
  };

  return (
    <>
      <main
        className="flex items-center justify-center"
        style={{ height: "100vh" }}
      >
        <div className="w-full max-w-md p-4 mx-auto rounded-md shadow sm:p-8 dark:bg-gray-700 dark:text-gray-100">
          <Image
            loader={imageLoader}
            className="flex justify-center object-cover object-center mx-auto rounded-3xl"
            alt="HomeLab logotype on sign in page"
            src={`/images/logo.png`}
            width={300}
            height={200}
          />
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Prijavite se
          </h2>
          <p className="text-sm text-center dark:text-gray-400">
            Ne posjedujete račun?
            <Link
              href="/auth/register"
              rel="noopener noreferrer"
              className="focus:underline hover:underline"
            >
              {" "}
              Registrujte se
            </Link>
          </p>
          <div className="flex items-center w-full my-4"></div>
          <form className="space-y-8 ng-untouched ng-pristine ng-valid">
            <input name="csrfToken" type="hidden" />
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm">Email adresa</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="vasemail@homelab.com"
                  onKeyDown={handleEnter}
                  value={texts.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Lozinka</label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Zaboravili ste lozinku?
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
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold duration-500 rounded-md dark:bg-violet-400 dark:text-gray-800 hover:bg-secondaryColor"
              onClick={handleSignIn}
            >
              Prijavite se
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
