"use client";

import { useState } from "react";

export default function PassResetByEmail() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-5 mt-40 mb-20 justify-center items-center mx-auto w-[448px] h-[310px] p-5">
      <h1 className="text-2xl">Нууц үг сэргээх</h1>
      <div className="w-full max-w-xs flex flex-col gap-2">
        <p className="text-sm">Имэйл</p>
        <input
          className="input input-bordered w-full max-w-xs"
          type="email"
          placeholder="Имэйл хаягаа оруулна уу"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className="btn btn-enabled w-full max-w-xs hover:bg-green-500 hover:text-white"
        aria-disabled="true"
      >
        Үргэлжлүүлэх
      </button>
    </div>
  );
}
