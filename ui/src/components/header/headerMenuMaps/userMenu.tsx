"use client";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { userMenuItems } from "../mainMenuItems";
import { usePathname } from "next/navigation";
import { UserIcon } from "@/components/icons/UserIcon";

import Basket from "@/app/basket/page";
import { access } from "fs";

export function UserMenu() {
  const token = localStorage.getItem("accessToken");
  const pathname = usePathname();
  if (token) {
    return (
      <div className="flex gap-5">
        <div className="flex gap-3 font-bold  justify-center flex-1 max-sm:hidden  items-center  ">
          <label className="input h-[35px] input-bordered flex items-center gap-2">
            <SearchIcon />
            <input type="text" className="grow" placeholder="Хайх" />
          </label>
          <Basket />
        </div>

        <div className="flex  p-2 md:flex items-center justify-center flex-1 gap-10 font-bold text-base ">
          <div className="flex justify-center items-center">
            <UserIcon />
            <a
              className={`px-2 py4 border-l-violet-200 ${
                pathname === "/user-profile" ? "text-[#18BA51]" : ""
              }`}
              href="/user-profile"
            >
              Хэрэглэгч
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-5">
        <div className="flex gap-5">
          <div className="flex gap-3 font-bold  justify-center flex-1 max-sm:hidden  items-center  ">
            <label className="input h-[35px] input-bordered flex items-center gap-2">
              <SearchIcon />
              <input type="text" className="grow" placeholder="Хайх" />
            </label>
            <Basket />
          </div>

          <div className="flex  p-2 md:flex items-center justify-center flex-1 gap-10 font-bold text-base ">
            <div className="flex justify-center items-center">
              <UserIcon />
              <a
                className={`px-2 py4 border-l-violet-200 ${
                  pathname === "/sign-in" ? "text-[#18BA51]" : ""
                }`}
                href="/sign-in"
              >
                Нэвтрэх
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
