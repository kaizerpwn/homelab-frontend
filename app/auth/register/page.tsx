"use client";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { imageLoader } from "@/utils/ImageLoader";
import Image from "next/image";
import Axios from "@/utils/Axios";
import Link from "next/link";

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
    const res = await Axios.makeRequest
      .post("/user/register", texts)
      .then((result) => {
        if (result.status === 200 && result.data.message === 302) {
          setError("Korisnik sa takvim emailom ili lozinkom već postoji.");
        } else if (result.status === 200 && result.data.message === 200) {
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
          <h2 className="text-3xl font-semibold text-center ">
            Registrujte se
          </h2>
          <p className="text-sm text-center dark:text-gray-400">
            Već posjedujete račun?
            <Link
              href="/auth/login"
              rel="noopener noreferrer"
              className="focus:underline hover:underline"
            >
              {" "}
              Prijavite se
            </Link>
          </p>
          <form className="space-y-8 ng-untouched ng-pristine ng-valid">
            <input name="csrfToken" type="hidden" />
            <div className="space-y-3">
              <div className="space-y-2">
                <label className="block text-sm">Ime</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onKeyDown={handleEnter}
                  placeholder="Unesite Vaše ime.."
                  value={texts.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm">Prezime</label>
                <input
                  type="email"
                  name="surname"
                  id="surname"
                  onKeyDown={handleEnter}
                  placeholder="Unesite Vaše prezime.."
                  value={texts.surname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm">Email adresa</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onKeyDown={handleEnter}
                  placeholder="vasemail@homelab.com"
                  value={texts.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Lozinka</label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onKeyDown={handleEnter}
                  placeholder="********"
                  value={texts.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Grad</label>
                </div>
                <div className="flex justify-center">
                  <select
                    name="city"
                    value={texts.city}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option hidden>Izaberite grad</option>
                    <option value="Sarajevo">Sarajevo</option>
                    <option value="Banja Luka">Banja Luka</option>
                    <option value="Tuzla">Tuzla</option>
                    <option value="Zenica">Zenica</option>
                    <option value="Mostar">Mostar</option>
                    <option value="Istocno Sarajevo">Istočno Sarajevo</option>
                    <option value="Srebrenik">Srebrenik</option>
                    <option value="Bihac">Bihać</option>
                    <option value="Brcko">Brčko</option>
                    <option value="Bijeljina">Bijeljina</option>
                    <option value="Prijedor">Prijedor</option>
                    <option value="Trebinje">Trebinje</option>
                    <option value="Travnik">Travnik</option>
                    <option value="Kiseljak">Kiseljak</option>
                    <option value="Doboj">Doboj</option>
                    <option value="Cazin">Cazir</option>
                    <option value="Bugojno">Bugojno</option>
                    <option value="Velika Kladuša">Velika Kladuša</option>
                    <option value="Visoko">Visoko</option>
                    <option value="Gorazde">Goražde</option>
                    <option value="Konjic">Konjic</option>
                    <option value="Gracanica">Gračanica</option>
                    <option value="Gradacac">Gradačac</option>
                    <option value="Bosanska aKrupa">Bosanska Krupa</option>
                    <option value="Mrkonjic Grad">Mrkonjić Grad</option>
                    <option value="Foca">Foča</option>
                    <option value="Zavidovici">Zavidovići</option>
                    <option value="Zivinice">Živinice</option>
                    <option value="Sanski Most">Sanski Most</option>
                    <option value="Bosanska Gradiska">Bosanska Gradiška</option>
                    <option value="Bileci">Bileći</option>
                    <option value="Lukavac">Lukavac</option>
                    <option value="Kakanj">Kakanj</option>
                    <option value="Livno">Livno</option>
                    <option value="Odžak">Odžak</option>
                    <option value="Sipovo">Šipovo</option>
                    <option value="Prozor">Prozor</option>
                    <option value="Novi Travnik">Novi Travnik</option>
                    <option value="Zvornik">Zvornik</option>
                  </select>
                </div>
              </div>
              <span className="text-red-400">{error}</span>
            </div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold duration-500 rounded-md dark:bg-violet-400 dark:text-gray-800 hover:bg-secondaryColor"
              onClick={handleRegister}
            >
              Registrujte se
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
