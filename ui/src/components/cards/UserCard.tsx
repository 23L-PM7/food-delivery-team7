"use client";

import { useEffect, useState } from "react";
import { useFood, useSaledFoods } from "@/app/globals";
import { NumericFormat } from "react-number-format";
import { OrderModal } from "@/app/menu/order";
import { getOnSaleFoods } from "@/app/util";

export function UserCard() {
  const { foods }: any = useFood();
  const [foodId, setFoodId] = useState("");
  const [token, setToken] = useState<string | null>(null);

 

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setToken(token)
    console.log(token);
  }, []);

    if(!token){
    console.log(token)
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 justify-items-center gap-[60px] mt-10 mb-5">
        {foods.map((food: any) => (
          <div
            className="grid gap-[14px]"
            key={food._id}
            onClick={() => window.location.href="/sign-in"}
          >
            <div className="w-[282px]">
              <div className="bg-[url('/images/menuZurag.jpg')] grid items-center justify-items-center group-hover:opacity-60 h-[186px] duration-300  rounded-2xl ease-in-out  bg-center w-[282px] relative">
                <img
                  className="absolute h-[186px] rounded-2xl w-[282px] object-cover"
                  src={food.image}
                />
                {food.sales > 0 && (
                  <div className="border-2 border-white text-white bg-[#18BA51] rounded-2xl py-1 px-4 absolute top-4 right-4 font-semibold text-lg">
                    {food.sales}%
                  </div>
                )}
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
        {/* <OrderModal foodId={foodId} onClose={() => setFoodId("")} /> */}
      </div>
    );
 }
   else{
     return (
       <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 justify-items-center gap-[60px] mt-10 mb-5">
         {foods.map((food: any) => (
           <div
             className="grid gap-[14px]"
             key={food._id}
             onClick={() => setFoodId(food._id)}
           >
             <div className="w-[282px]">
               <div className="bg-[url('/images/menuZurag.jpg')] grid items-center justify-items-center group-hover:opacity-60 h-[186px] duration-300  rounded-2xl ease-in-out  bg-center w-[282px] relative">
                 <img
                   className="absolute h-[186px] rounded-2xl w-[282px] object-cover"
                   src={food.image}
                 />
                 {food.sales > 0 && (
                   <div className="border-2 border-white text-white bg-[#18BA51] rounded-2xl py-1 px-4 absolute top-4 right-4 font-semibold text-lg">
                     {food.sales}%
                   </div>
                 )}
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
         <OrderModal foodId={foodId} onClose={() => setFoodId("")} />
       </div>
     );
   }  
}
