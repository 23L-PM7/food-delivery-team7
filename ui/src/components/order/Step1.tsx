import { useState } from "react";

type Step1Props = {
  isFieldValues: boolean;
};

export function Step1({ isFieldValues }: Step1Props) {
  return (
    <div className="w-full  px-4 ">
      <div className="flex w-[432px] h-[100px] gap-4 py-4 items-center">
        {isFieldValues && (
          <div className="flex w-[432px] h-[100px] gap-4 py-4 items-center">
            <img
              className="size-12 items-center flex "
              src="/images/InDone.png"
              alt=""
            />
            <div className="flex  flex-col">
              <p className="text-sm text-[#8B8E95] ">Алхам 1</p>
              <p className="text-xl font-normal	text-black">
                Хаягийн мэдээлэл оруулах
              </p>
              <p className="text-base text-[#18BA51]">Оруулсан</p>
            </div>
          </div>
        )}
        {!isFieldValues && (
          <div className="flex w-[432px] h-[100px] gap-4 py-4 items-center">
            <img
              className="size-12 items-center flex "
              src="/images/InProgressState.png"
              alt=""
            />
            <div className="flex  flex-col">
              <p className="text-sm text-[#8B8E95] ">Алхам 1</p>
              <p className="text-xl font-normal	text-black">
                Хаягийн мэдээлэл оруулах
              </p>
              <p className="text-base text-[#0468C8]">Хүлээгдэж байна</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
