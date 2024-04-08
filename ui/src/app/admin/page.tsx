"use client";
import React, { useEffect, useState } from "react";
import { CategoryList } from "./CategoryList";
import { MenuComp } from "./MenuComp";

export default function AdminMenu() {
  return (
    <div className="bg-split-background">
      <div className="flex container mx-auto w-full">
        <div className="w-1/4 bg-white py-[26px] pr-[26px]">
          <h1 className="text-[22px] text-[#272727] font-bold mb-10">
            Food menu
          </h1>
          <div className="grid gap-[26px]">
            <CategoryList />
          </div>
        </div>
        <MenuComp />
      </div>
    </div>
  );
}
