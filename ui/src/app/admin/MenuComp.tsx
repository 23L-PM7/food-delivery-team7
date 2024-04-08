import { BigAddIcon } from "@/components/icons/BigAddIcon";
import { AddMenu } from "./AddMenu";
import { showModal } from "./AddMenu";
import { AdminCard } from "@/components/cards/AdminCard";

export function MenuComp() {
    return (
        <div className="w-3/4 bg-[#F7F7F8] pl-6 py-6">
            <div className="flex justify-between py-4">
                <h1 className="text-[22px] text-[#272727] font-bold ">Breakfast</h1>
                <AddMenu />
            </div>
            <div className="flex flex-col items-center gap-[30px] mt-10">
                <button onClick={showModal}>
                    <BigAddIcon />
                </button>
                <p className="text-[#808080]">Уучлаарай, Таны меню хоосон байна.</p>
            </div>
            <AdminCard />
        </div>
    )
}