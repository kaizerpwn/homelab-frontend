"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { imageLoader } from "@/utils/ImageLoader";
import Image from "next/image";
import Axios from "@/utils/Axios";
import Link from "next/link";
import BackgroundEffects from "@/components/Particles/BackgroundEffects";
import Cities from "@/components/Panel/Register/Cities";
import States from "@/components/Panel/Register/States";
import Inputs from "@/components/Panel/Register/Inputs";

export default function Login() {
  const [error, setError] = useState<string>();

  const [texts, setTexts] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    city: "Izaberi grad",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value][0] }));
  };

  const handleRegister = async () => {
    await Axios.makeRequest
      .post("http://localhost:8000/api/users/register", texts)
      .then((result) => {
        if (result.status === 200 && result.data.message === 302) {
          setError("Korisnik sa takvim emailom ili lozinkom već postoji.");
        } else if (
          result.status === 200 &&
          result.data.message === "Account successfully registered."
        ) {
          signIn("credentials", {
            email: texts.email,
            password: texts.password,
            callbackUrl: "/panel",
          });
        }
      });
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) handleRegister();
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
            src={`/images/logo.png`}
            width={300}
            height={200}
          />
          <h2 className="text-3xl font-semibold text-center ">Register</h2>
          <p className="text-sm text-center dark:text-gray-400">
            Already have account?
            <Link
              href="/auth/login"
              rel="noopener noreferrer"
              className="focus:underline hover:underline"
            >
              {" "}
              Sign in
            </Link>
          </p>
          <form className="space-y-8">
            <input name="csrfToken" type="hidden" />
            <div className="space-y-3">
              <Inputs handleChange={handleChange} handleEnter={handleEnter} texts={texts} />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Location</label>
                </div>
                <div className="flex justify-center">
                  <States />
                  <Cities texts={texts} handleChange={handleChange} />
                </div>
              </div>
              <span className="text-red-400">{error}</span>
            </div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold duration-500 rounded-md bg-secondaryColor dark:text-gray-800 hover:bg-violet-400"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
