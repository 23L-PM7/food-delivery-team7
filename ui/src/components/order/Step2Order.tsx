"use client";

import { useState } from "react";
import { ArrowFunctionIcon } from "../../../public/Icons/ArrowFunction";
import { LocationIcon } from "../../../public/Icons/Location";
import { FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import LocationCity from "@mui/icons-material/LocationCity";
import { TbArrowWaveRightDown } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DistrictSelector from "./DistrictSelector";
import KhorooSelector from "./KhorooSelector";
import ApartmentSelector from "./ApartmentSelector";
import { sizing } from "@mui/system";

export function Step2Order() {
  return (
    <div
      className="w-[432px] flex p-6 shadow-md justify-between flex-col rounded-xl
  gap-4  mb-20 h-[712px] "
    >
      <div className="flex gap-4 py-4 border-t-2  border-b-2 ">
        <img className="w-[184px] h-[121px]" src="/images/pizza.jpg" alt="" />
        <div className="flex gap-2 flex-col">
          <div className="flex  flex-col">
            <h1 className="text-black text-lg	 font-semibold	">Main Pizza </h1>
            <p className="text-[#18BA51] text-lg	 font-semibold ">34,800₮</p>
          </div>
          <p className="text-base font-normal leading-[19.5px]	 text-[#767676] ">
            Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
          </p>
        </div>
      </div>
      <div className="flex  gap-10">
        <div className=" w-[187px] h-12">
          <p className="text-lg font-normal leading-[27px] text-[#767676]">
            Нийт төлөх дүн
          </p>
          <p className="text-[#121316] font-bold text-lg	">34,800₮</p>
        </div>
        <button className=" hover:scale-110 duration-200 rounded-xl bg-[#EEEFF2] w-[187px] h-[48px]">
          Захиалах
        </button>
      </div>
    </div>
  );
}
