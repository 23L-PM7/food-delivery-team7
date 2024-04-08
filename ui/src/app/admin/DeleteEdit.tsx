import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { DetailIcon } from "../../components/icons/DetailIcon";
import axios from "axios";
import { useState } from "react";

type DeleteEditProps = {
  categoryId: string;
  onChange: () => void;
};

export function DeleteEdit({ categoryId, onChange }: DeleteEditProps) {
  const [name, setName] = useState("");
  // ----DELETE CATEGORY----//
  async function handleDeleteCategory(id: string) {
    if (window.confirm("Are you sure to delete this category?")) {
      try {
        await axios.delete(`http://localhost:8000/category/${id}`).then(() => {
          console.log("Deleted");
          onChange();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // ----UPDATE CATEGORY----//
  async function handleEditCategory(id: string) {
    if (window.prompt("Edit", "hi")) {
      try {
        await axios.put(`http://localhost:8000/category/${id}`).then(() => {
          // if (name === null) return;
          // if (name === "") {
          //   alert("Utga oruulna uuu");
          // }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="dropdown dropdown-right dropdown-end">
      <div tabIndex={0} className=" m-1">
        <DetailIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li onClick={() => handleEditCategory(categoryId)}>
          <div>
            <MdModeEdit />
            <a>Edit name</a>
          </div>
        </li>

        <li onClick={() => handleDeleteCategory(categoryId)}>
          <div className="text-[#DF1F29]">
            <FaRegTrashAlt />
            <a className="text-[#DF1F29]">Delete Category </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
