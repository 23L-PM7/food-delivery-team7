import { Star } from "@/components/icons/Star";

export default function Zone() {
  return (
    <div>
      <div className="flex container mx-auto my-auto mt-[50px]">
        <img src="./images/Ulaanbaatar .png" alt="Ulaanbaatar" />
      </div>

      <div className="container gap-3 mx-auto flex  items-center">
        <Star />
        <h1 className="font-bold text-2xl my-10">Хүргэлтийн бүс дэх хаягууд</h1>
      </div>
      <div className="flex mx-auto my-auto mb-[50px]">
        <div className="border-2 rounded-lg flex  flex-col  container mx-auto my-auto  p-5 w-[588px] h-[388px]   ">
          <h1 className="font-semibold text-xl my-5 mb-8">А бүс</h1>
          <div className="flex gap-12">
            <div className="text-base font-normal">
              <p className="mb-3">Нархан хотхон</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">45-р байр</p>
              <p className="mb-3">3-р байр</p>
              <p className="mb-3">Хоймор хотхон </p>
              <p className="mb-3">Хоймор хотхон </p>
            </div>
            <div className="text-base font-normal">
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
        <div className="border-2 rounded-lg flex flex-col  container mx-auto my-auto  p-5 w-[588px] h-[388px] ">
          <h1 className="font-semibold text-xl my-5 mb-8">Б бүс</h1>
          <div className="flex gap-12">
            <div className="text-base font-normal ">
              <p className="mb-3">Нархан хотхон</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">26-р байр</p>
              <p className="mb-3">45-р байр</p>
              <p className="mb-3">3-р байр</p>
              <p className="mb-3">Хоймор хотхон </p>
              <p className="mb-3">Хоймор хотхон </p>
            </div>
            <div className="text-base font-normal ">
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
