"use client";
import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/cards/Card";
import { AdminCard } from "@/components/cards/AdminCard";
import { DangerState } from "@/components/states/Danger";
import { SuccessState } from "@/components/states/Success";
import { WarningState } from "@/components/states/Warning";

export default function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailAddress = (e: any) => setEmail(e.target.value);

  return (
    <>
      <div className="flex items-center w-1/4 min-h-screen p-4  lg:justify-center  mx-auto">
        <div className="flex flex-col overflow-hidden  rounded-md  max md:flex-row md:flex-1 lg:w-2/3 mx-auto ">
          <div className="p-5  bg-white md:flex-1 lg:w2/3 lg:mx-auto ">
            <h3 className="my-4 text-2xl font-semibold text-gray-700 flex justify-center">
              Нэвтрэх
            </h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm  font-semibold text-gray-500"
                >
                  Имэйл
                </label>
                <input
                  placeholder="Имэйл"
                  type="email"
                  id="email"
                  autoFocus
                  value={email}
                  onChange={handleEmailAddress}
                  className="bg-gray-100 px-4 py-4  transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between relative">
                  <label
                    htmlFor="password"
                    className="text-sm  font-semibold text-gray-500"
                  >
                    Нууц үг
                  </label>
                </div>
                <div className="relative flex flex-col">
                  <input
                    placeholder="Нууц үг"
                    type="password"
                    id="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="bg-gray-100  px-4 py-4 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  <button
                    type="button"
                    data-hs-toggle-password='{
            "target": "#hs-toggle-password"
            }'
                    className="absolute top-0 end-0 flex items-center p-3.5 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 size-3.5  text-gray-400 dark:text-neutral-600"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        className="hs-password-active:hidden"
                        d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                      />
                      <path
                        className="hs-password-active:hidden"
                        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                      />
                      <path
                        className="hs-password-active:hidden"
                        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                      />
                      <line
                        className="hs-password-active:hidden"
                        x1="2"
                        x2="22"
                        y1="2"
                        y2="22"
                      />
                      <path
                        className="hidden hs-password-active:block"
                        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                      />
                      <circle
                        className="hidden hs-password-active:block"
                        cx="12"
                        cy="12"
                        r="3"
                      />
                    </svg>
                  </button>
                  <a
                    href="#"
                    className="text-sm text-slate-800  hover:underline focus:text-blue-800 flex justify-end"
                  >
                    Нууц үг сэргээх
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2"></div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center mx-auto px-4 py-4 text-lg  text-gray-400 transition-colors duration-300 bg-gray-200 rounded-md shadow hover:bg-green-600 hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Нэвтрэх
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <div className="flex flex-col">
                    <span>Эсвэл</span>
                  </div>
                </span>
                <Link href="sign-up">
                  <button
                    type="submit"
                    className="w-full flex justify-center mx-auto px-4 py-4 text-lg   transition-colors duration-300 border border-green-400 text-black rounded-md shadow hover:bg-green-400 hover:text-blue-400 focus:outline-none focus:ring-blue-200 focus:ring-4"
                  >
                    Бүртгүүлэх
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
