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

export function Step1Wrapper() {
  return (
    <div
      className="w-[432px] flex flex-col shadow-md rounded-xl
     gap-4 px-1 mb-20 h-[712px] py-6"
    >
      <div className="flex flex-col gap-2 mb-8  px-4  py-2">
        <h1 className="text-sm text-black">Хаяг аа оруулна уу</h1>
        <DistrictSelector />
        <KhorooSelector />
        <ApartmentSelector />
      </div>

      <div className=" px-4 gap-10   w-[384px]">
        <h1 className="text-sm pb-1 text-black">Нэмэлт мэдээлэл</h1>
        <textarea
          id="message"
          className="block mb-6 p-4 w-[384px] rounded-sm
           text-sm text-black bg-[#F7F7F8] input-bordered h-[112px]"
          placeholder="Орц, давхар, орцны код ..."
        ></textarea>
      </div>
      <div className="px-4  mb-6  w-[384px]">
        <h1 className="text-sm pb-1 text-black">Утасны дугаар*</h1>
        <input
          className=" p-4 w-[384px] rounded-sm
           text-sm text-black bg-[#F7F7F8] input-bordered h-[48px]"
          type="text"
          name=""
          placeholder="Утасны дугаараа оруулна уу"
          id=""
        />
      </div>
      <div className=" w-[384px] px-4">
        <h1 className="text-sm pb-1 text-black">Төлбөр төлөх </h1>
        <div className="flex gap-8 w-[384px] h-[24px] ">
          <div className="form-control  ">
            <label className="label  gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text pr-10">Бэлнээр</span>
            </label>
          </div>
          <div className="  form-control">
            <label className="label gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Картаар</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
