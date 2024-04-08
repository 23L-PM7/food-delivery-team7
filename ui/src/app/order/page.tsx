"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";
import KhorooSelector from "@/components/order/KhorooSelector";
import { Step1 } from "@/components/order/Step1";
import { Step1Wrapper } from "@/components/order/Step1Wrapper";
import { Step2 } from "@/components/order/Step2";
import { Step2Order } from "@/components/order/Step2Order";

export default function Order() {
  return (
    <div className="flex mx-auto h-screen  w-full justify-center pt-10 bg-white">
      <div className="flex flex-col max-h-screen w-[432px] container mx-auto ">
        <Step1 />
        <Step1Wrapper />
      </div>
      <div className="flex flex-col max-h-screen w-[432px]  container mx-auto">
        <Step2 />
        <Step2Order />
      </div>
    </div>
  );
}
