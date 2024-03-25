"use client";
import React from "react";
import { DetailIcon } from "../../components/icons/DetailIcon";
import { BigAddIcon } from "@/components/icons/BigAddIcon";

export default function AdminMenu() {
  return (
    <div className="bg-[#EAECF0] container w-full mx-auto">
      <div className="border-1 rounded-xl bg-white">
        <div className="flex justify-between px-5 py-6">
          <h1>Admin dashboard</h1>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div></div>
      </div>
    </div>
  );
}
