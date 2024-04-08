import { CloseIcon } from "@/components/icons/CloseIcon";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { fetcher } from "../util";

export function showModal() {
  document.getElementById("menu_modal").showModal();
}

export function AddMenu() {
  type Menu = {
    foodName: string;
    foodCategory: string;
    foodIngredients: string;
    foodPrice: number;
    salesPercentage: number;
    foodImg: string;
  };

  const [foodName, setFoodName] = useState("");
  const [foodIngredients, setFoodIngredients] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodSales, setFoodSales] = useState("");
  const [salesPercentage, setSalesPercentage] = useState("");
  const [foodImg, setFoodImg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [categories, setCategories] = useState([]);



  const hideModal = () => {
    document.getElementById("menu_modal").close();
  };

  useEffect(() => {
    fecthCategories();
  }, []);

  const fecthCategories = () => {
    fetch("http://localhost:8000/category")
    .then((res) => res.json())
    .then((data) => setCategories(data));
  };

  // add menu
  const newMenu = async () => {
    // if (
    //   !foodName ||
    //   !foodCategory ||
    //   !foodIngredients ||
    //   !foodPrice ||
    //   !salesPercentage ||
    //   !foodImg
    // ) {
    //   // show alert screen
    //   return;
    // }

    const newMenu: Menu = {
      foodName,
      foodCategory: selectedCategory ? selectedCategory.value : "",
      foodIngredients,
      foodPrice,
      salesPercentage,
      foodImg,
    };


    await axios
      .post("http://localhost:8000/menu/create", { ...newMenu })
      .then(() => {
        handleClear;
        hideModal;
      });
  };

  const handleClear = () => {
    setFoodName("");
    setFoodIngredients("");
    setFoodPrice("");
    setFoodSales("");
    setSalesPercentage("");
    setFoodImg("");
  };

  const handleFoodName = (event) => {
    setFoodName(event?.target.value);
  };

  const handleFoodIngredients = (event) => {
    setFoodIngredients(event?.target.value);
  };

  const handleFoodPrice = (event) => {
    setFoodPrice(event?.target.value);
  };

  const handleSalesPercentage = (event) => {
    setSalesPercentage(event?.target.value);
  };

  const handleFoodImg = (event) => {
    setFoodImg(event?.target.value);
  };

  const options = categories.map((category) => {
    return {
      value: category._id,
      label: category.name,
    };
  });

  return (
    <div>
      <button
        className="btn sm:btn-sm md:btn-md bg-[#18BA51] text-white no-animation"
        onClick={showModal}
      >
        Add new food
      </button>

      <dialog id="menu_modal" className="modal">
        <div className="border-1 rounded-2xl bg-white w-[587px]">
          <div className="px-4 py-6 flex justify-between align-center items-center">
            <div className="p-1.5" onClick={hideModal}>
              <CloseIcon />
            </div>
            <h1 className="text-[#161616] text-2xl font-bold text-center">
              Create food
            </h1>
            <div className="size-6"></div>
          </div>

          <div className="divider m-0" />

          <div className="p-6 grid gap-4">
            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны нэр</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                onChange={handleFoodName}
                value={foodName}
              />
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">
                Хоолны ангилал
              </p>
              <Select
                className="basic-single border-0 rounded-xl"
                classNamePrefix="select"
                defaultValue={selectedCategory}
                onChange={(value) => setSelectedCategory(value)}
                options={options}
              />
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны орц</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                onChange={handleFoodIngredients}
                value={foodIngredients}
              />
            </div>
            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны үнэ</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                onChange={handleFoodPrice}
                value={foodPrice}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex gap-2">
                <input type="checkbox" className="toggle toggle-xs" />
                <p className="text-sm font-medium text-[#121316]">
                  Хямдралтай эсэх
                </p>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                onChange={handleSalesPercentage}
                value={salesPercentage}
              />
            </div>
            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны зураг</p>

              <div className="w-[284px] h-[122px] bg-[#BABCC4]/[12%] border-[1px] border-dashed border-[#D6D7DC] text-[#525252] rounded-lg">
                <div className="flex flex-col gap-2 items-center mt-6">
                  <h3>Add image for the food</h3>
                  <label htmlFor="file" className="cursor-pointer">
                    <div className="bg-[#393939] px-2 py-1 flex border rounded-lg text-white">
                      <span>Add image</span>
                    </div>
                    <input id="file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="divider m-0" />
          <div className="p-6 flex gap-4 justify-end">
            <button className="btn btn-ghost" onClick={handleClear}>
              Clear
            </button>
            <button className="btn btn-neutral" onClick={newMenu}>
              Continue
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
