import { useEffect, useState } from "react";
import { fetcher } from "@/app/util";
import { usePathname, useRouter } from "next/navigation";
import { useCategory, useFood } from "@/app/globals";
import axios from "axios";
import { Loading } from "../Loading";

export function CategoryState() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    fetcher("category").then((data) => {
      setCategories(data);
      setLoading(false);
      console.log(data);
    });
  }, []);

  const { category, setCategory }: any = useCategory();
  const setFoods: any = useFood((state: any) => state.setFoods);

  function fetchFood(_id: string) {
    axios
      .get(`http://localhost:8000/food?categoryId=${_id}`)
      .then((foods) => setFoods(foods.data));
  }

  const handleCategory = (_id: string) => {
    setCategory(_id);
    fetchFood(_id);
  };

  const pushToCategory = (_id: string) => {
    router.push(`/menu/${_id}`);
  };

  if (loading) return <Loading />;
  return (
    <div className="lg:h-[107px] w-10/12 lg:w-full  grid grid-cols-1 sm:grid-cols-2 lg:flex gap-2 container mx-auto xl:py-[8px]  xl:px-[26px] border-[black] border-1 lg:py-8 bg-white  lg:justify-between mt-10">
      {categories.map((category: any) => (
        <div onClick={() => pushToCategory(category._id)} key={category._id}>
          <button
            onClick={() => {
              handleCategory(category._id);
            }}
            key={category._id}
            className={`border-[#D6D8DB] hover:bg-green-500 w-full  px-4 text-center duration-500 py-2 font-medium	text-lg  border-[1px] rounded-xl text-black border-solid  lg:w-[280.5px]  h-[43px] ${
              pathname === `/menu/${category._id}`
                ? "bg-green-500 text-white"
                : "bg-white"
            } `}
          >
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
}
