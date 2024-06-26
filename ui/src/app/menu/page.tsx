"use client";
import React, { FC, useEffect, useState } from "react";
import { CategoryState } from "@/components/categoryContainer/CategoryState";
import { useCategory, useFood } from "../globals";
import axios from "axios";
import { HomeUserCard } from "@/components/cards/HomeUserCard";

const Menu: FC = () => {
  const { _foods, setFoods }: any = useFood();
  const { category }: any = useCategory();

  function fetchFood() {
    axios
      .get(`http://localhost:8000/food?categoryId=${category}`)
      .then((foods) => setFoods(foods.data));
  }

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div>
      <div className="mt-10 ">
        <CategoryState />
      </div>
      <div className="app-container bg-white mb-10">
        <div className="container mx-auto">
          <HomeUserCard />
        </div>
      </div>
    </div>
  );
};

export default Menu;
