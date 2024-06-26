"use client"
import { Book } from "../icons/Book";
import { Clock } from "../icons/Clock";
import { Food } from "../icons/Food";
import React from "react";

export function FastDeliveryCard() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const cards = [
    {
      title: "Хүргэлтийн төлөв хянах",
      content: " Захиалга бэлтгэлийн явцыг хянах",
      image: <Book />,
    },
    {
      title: "Шуурхай хүргэлт",
      content: "Захиалга бэлтгэлийн явцыг хянах",
      image: <Clock />,
    },
    {
      title: "Эрүүл, баталгаат орц",
      content: "Захиалга бэлтгэлийн явцыг хянах",
      image: <Food />,
    },
    {
      title: "Хоолны өргөн сонголт",
      content: "Захиалга бэлтгэлийн явцыг хянах",
      image: <Book />,
    },
  ];

  {
    return (
      <div className="flex sm:p-8 md:p-25 xl:p-25 2xl:p-32">
        <div className="mx-auto  gap-[47px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 ">
          {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
            <div
              className="max-xl:w-72 w-[340px] h-[155px] border rounded-xl shadow-xl  flex p-4 "
              key={index}
            >
              <div>
                <div className="p-5">{card.image}</div>

                <h1 className="font-bold">{card.title}</h1>
                <p className="font-normal text-sm">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
