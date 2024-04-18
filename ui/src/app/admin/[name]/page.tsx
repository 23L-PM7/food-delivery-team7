"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditorMenu } from "@/app/admin/EditorMenu";
import { useCategory, useFood } from "@/app/globals";
import { toast } from "sonner";
import { NumericFormat } from "react-number-format";
import { useParams } from "next/navigation";

export default function AdminCard() {
    const { name } = useParams();
    const { foods, setFoods }: any = useFood();
    const { category }: any = useCategory();
    const [ editingId, setEditingId ] = useState("");

    useEffect(() => {
        fetchFood();
    }, []);

    function fetchFood() {
        axios
            .get(`http://localhost:8000/food?categoryId=${category}`)
            .then((foods) => setFoods(foods.data));
    }

    const deleteFood = async (_id: string) => {
        if (confirm("Устгах уу?")) {
            await axios
                .delete(`http://localhost:8000/food/delete/${_id}`)
                .then(() => {
                    toast.success("Амжилттай устгалаа");
                    fetchFood();
                });
        }
    };

    console.log(name);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-[60px] mt-10 mb-5">
            <div>
                category name: {name}
            </div>
            {/* {foods.map((food: any) => (
                <div className="grid gap-[14px]" key={food._id}>
                    <div className="w-[282px]">
                        <div className="bg-[url('/images/menuZurag.jpg')] grid items-center justify-items-center group-hover:opacity-60 h-[186px]  duration-300  rounded-2xl ease-in-out  bg-center w-[282px] relative">
                            {food.sales > 0 && (
                                <div className="border-2 border-white text-white bg-[#18BA51] rounded-2xl py-1 px-4 absolute top-4 right-4 font-semibold text-lg">
                                    {food.sales}%
                                </div>
                            )}
                            <div className="flex gap-2 opacity-0 hover:opacity-100 transition-all">
                                <button
                                    className="z-20 w-[166px] h-[40px] rounded-xl text-lg text-black font-semibold px-4 py-1 bg-white"
                                    onClick={() => setEditingId(food._id)}
                                >
                                    EDIT
                                </button>
                                <button
                                    className="z-20 s-10 rounded-xl px-4 py-1 bg-white"
                                    onClick={() => deleteFood(food._id)}
                                >
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="gap-1">
                        <p className="text-xl font-semibold text-black">{food.name}</p>
                        <p className="text-lg font-semibold text-[#18BA51] ">
                            {food.sales > 0 && (
                                <div className="flex">
                                    <NumericFormat
                                        value={food.price - (food.sales / 100) * food.price}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                        suffix="₮"
                                        className="bg-transparent text-lg font-semibold w-20"
                                        disabled
                                    />
                                    <NumericFormat
                                        value={food.price}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                        suffix="₮"
                                        className="bg-transparent text-sm text-black line-through w-20"
                                        disabled
                                    />
                                </div>
                            )}
                            {food.sales === 0 && (
                                <NumericFormat
                                    value={food.price}
                                    allowLeadingZeros
                                    thousandSeparator=","
                                    suffix="₮"
                                    className="bg-transparent text-lg font-semibold w-20"
                                    disabled
                                />
                            )}
                        </p>
                    </div>
                </div>
            ))}

            <EditorMenu editingId={editingId} onClose={() => setEditingId("")} /> */}
        </div>
    );
}