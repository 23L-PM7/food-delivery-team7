import { AddIcon } from "@/components/icons/AddIcon";
import { MinusIcon } from "@/components/icons/MinusIcon";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CartCard() {
  let [number, setNumber] = useState(1);
  const entreeArray = [
    {
      entreeId: "0",
    },
    {
      entreeId: "1",
    },
    {
      entreeId: "2",
    },
    {
      entreeId: "3",
    },
  ];

  // const [entree, setEntree] = useState([]);

  // function loadEntree() {
  //   // axios.get(
  //   //   // "http://localhost:3000/entree"
  //   //   ).then((response) => {
  //   //   setEntree(response.data);
  //   // });
  // }

  // useEffect(() => {
  //   loadEntree();
  // }, []);

  // function deleteEntree() {
  //   if (confirm("Delete?")) {
  //     axios.delete(
  //       // `http://localhost:3000/entree/delete/${id}`
  //       ).then(() => {
  //       loadEntree();
  //     });
  //   }
  // }

  function Minus() {
    if (number > 0) {
      number = number - 1;
      setNumber(number);
    }
  }
  function Plus() {
    number = number + 1;
    setNumber(number);
  }

  return (
    <div className="card w-[538px] h-[182px] bg-base-100 border-2">
      <div className="flex justify-even items-center w-full h-full p-5 gap-3">
        <div className="w-1/2">
          <img src="/images/pizza.jpg" alt="entree" />
        </div>
        <div className="flex flex-col w-1/2 h-full justify-evenly">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2>Main Pizza</h2>
              <p className="text-green-500">34,800₮</p>
            </div>
            <div>
              <button onClick={() => deleteEntree("yourEntreeId")}>X</button>
            </div>
          </div>

          <div>
            <p className="font-light text-yellow-800">
              Хулуу, төмс, лууван, сонгино, цөцгийн тос, самрын үр
            </p>
            <div className="flex justify-start items-center gap-6 mt-3">
              <button onClick={Minus}>
                <MinusIcon />
              </button>
              <p>{number}</p>
              <button onClick={Plus}>
                <AddIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
