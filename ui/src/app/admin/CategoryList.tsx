import { AddIcon } from "@/components/icons/AddIcon";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetcher } from "../util";
import { DeleteEdit } from "./DeleteEdit";
import { Loading } from "@/components/Loading";

type Category = {
  name: string;
  _id: string;
};

const showModal = () => {
  return document.getElementById("my_modal_3").showModal();
};

const closeModal = () => {
  return document.getElementById("my_modal_3").close();
};

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  function loadCategory() {
    setLoading(true);
    fetcher("category").then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }

  function createCategory() {
    if (!name) {
      alert("Enter name");
      return;
    }
    axios
      .post("http://localhost:8000/category", {
        name: name,
      })
      .then(() => {
        loadCategory();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setName("");
        closeModal();
      });
  }

  useEffect(() => {
    loadCategory();
  }, []);

  console.log({ categories });

  function deleteAll() {
    setName("");
    return;
  }

  if (loading) return <Loading />;

  return (
    <div className="grid gap-[26px]">
      {categories.map((category) => {
        return (
          <div
            key={category._id}
            className="btn sm:btn-sm md:btn-md bg-white hover:bg-[#18BA51] justify-between"
          >
            <p className="text-lg font-medium">{category.name}</p>
            <DeleteEdit categoryId={category._id} onChange={loadCategory} />
          </div>
        );
      })}
      <div>
        <button
          onClick={showModal}
          className="btn flex bg-white hover:bg-[#18BA51] btn-block "
        >
          <AddIcon />
          <p className="text-lg font-medium text-[#5E6166] hover:text-white ">
            Create New Category
          </p>
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg justify-center flex items-center">
              Create new category
            </h3>
            <div className="divider m-0"></div>
            <div className="">
              <p className="py-4">Category name</p>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Type here"
                className="input w-[100%] input-bordered max-w-xs"
              />
            </div>
            <div className="flex items-center gap-5 ml-[65%]">
              <button onClick={deleteAll}>Clear</button>
              <button
                className="w-[109px] h-[40px] border px-[16px] py-[10px] rounded bg-[#393939] flex items-center text-white"
                onClick={createCategory}
              >
                Continue
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
