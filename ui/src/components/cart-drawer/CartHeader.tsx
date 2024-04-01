"use client";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

export function CartHeader() {
  return (
    <div className="flex w-full h-18 items-center self-start border-b-2">
      <button
        className="flex p-3"
        
      >
        <ArrowIcon />
      </button>
      <p className="flex w-full items-center justify-center text-2xl p-3">
        Таны сагс
      </p>
    </div>
  );
}
