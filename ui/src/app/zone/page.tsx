import { Star } from "@/components/icons/Star";

export default function Zone() {
  return (
    <div className="container mx-auto  flex flex-col  items-center gap-5  max-sm:w-[450px] p-5 w-[1200px]">
      <img className=" mt-[50px]" src="./images/map.png" />
      <div className="container gap-3 mx-auto flex  items-center">
        <Star />
        <h1 className="font-bold text-2xl my-10">Хүргэлтийн бүс дэх хаягууд</h1>
      </div>
      <div className="flex  max-sm:w-[400px] max-sm:flex-col  mx-auto my-auto mb-[50px] w-full ">
        <div className="  bg-white drop-shadow-lg rounded-lg flex  flex-col  container mx-auto my-auto  p-5 w-[588px] max-sm:w-[400px] ">
          <div className="border-b-[1px] border-green-600 my-5 ">
            <h1 className="font-semibold text-xl  mb-5 ">А бүс</h1>
          </div>
          <div className="flex gap-12 max-sm:p-3 ">
            <div className="text-base font-normal  ">
              <p className="mb-3">Нархан хотхон</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">45-р байр</p>
              <p className="mb-3">3-р байр</p>
              <p className="mb-3">Хоймор хотхон </p>
              <p className="mb-3">Хоймор хотхон </p>
            </div>
            <div className="text-base font-normal mx-[100px]">
              <p className="mb-3">Нархан хотхон</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">45-р байр</p>
              <p className="mb-3">3-р байр</p>
              <p className="mb-3">Хоймор хотхон </p>
              <p className="mb-3">Хоймор хотхон </p>
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg rounded-lg flex flex-col  container mx-auto my-auto  p-5 w-[588px] max-sm:w-[400px]">
          <div className="border-b-[1px] border-green-600 my-5">
            <h1 className="font-semibold text-xl mb-5">Б бүс</h1>
          </div>
          <div className="flex gap-12 max-sm:p-3 ">
            <div className="text-base font-normal">
              <p className="mb-3">Нархан хотхон</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">45-р байр</p>
              <p className="mb-3">3-р байр</p>
              <p className="mb-3">Хоймор хотхон </p>
              <p className="mb-3">Хоймор хотхон </p>
            </div>
            <div className="text-base font-normal mx-[100px] ">
              <p className="mb-3">Нархан хотхон</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">45-р байр</p>
              <p className="mb-3">3-р байр</p>
              <p className="mb-3">Хоймор хотхон </p>
              <p className="mb-3">Хоймор хотхон </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
