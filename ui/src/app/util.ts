"use client";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { categories } from "@/components/CategoryData";
export async function fetcher(path: string) {
  const response: any = await axios.get(`http://localhost:8000/${path}`, {
    headers: {
      accessToken: "dummyAccessToken",
    },
  });

  return response.data;
}

export function fetchUsers() {
  const [users, setUsers] = useState([]);
  fetch("http://localhost:8000/user/create")
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((error) => {
      console.log("aldaa garlaa");
    });
}

export async function mutator(path: string, postData: {}) {
  const response: any = await axios
    .post(`http://localhost:8000/user/login`, postData, {
      headers: {
        "access-token": localStorage.getItem("accessToken") || "",
      },
    })
    .catch((e) => {
      toast.error("Нэвтрэхэд асуудал гарлаа");
      // if (e.response.status === 401) {
      //   alert("Username or password is incorrect");
      // }
    });

  return response.data;
}

export async function getOnSaleFoods(size?: number) {
  const response: any = await axios.get(
    `http://localhost:8000/food/saledFoods?size=${size}`,
    {
      headers: {
        accessToken: "dummyAccessToken",
      },
    }
  );
  return response.data;
}

export async function getOnMainCourse(size?: number, categoryId?: string) {
  const response: any = await axios.get(
    `http://localhost:8000/food/featuredFood?size=${size}&categoryId=${categoryId}`,
    {
      headers: {
        accessToken: "dummyAccessToken",
      },
    }
  );
  return response.data;
}
