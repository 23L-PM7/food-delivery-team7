"use client";

import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function PassResetByCode() {
  const [show, setShow] = useState("");
  const [code, setCode] = useState("");
  const [hider, setHider] = useState(() => eyeOff);

  function handleToggler() {
    if (show === "password") {
      setHider(eye);
      setShow("text");
    } else {
      setHider(eyeOff);
      setShow("password");
    }
  }

  return (
    <div className="flex flex-col gap-5 mt-40 mb-20 justify-center items-center mx-auto  w-[448px] h-[310px] p-5">
      <h1 className="text-2xl">Нууц үг сэргээх</h1>
      <div className="flex flex-col w-full max-w-xs gap-3">
        <div>
          <p className="text-sm text-yellow-600">
            Таны <span className="text-green-600">example@pinecone.mn</span>{" "}
            хаяг руу сэргээх код илгээх болно.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Нууц үг сэргээх код</p>

          <div className="relative flex justify-center flex-col">
            <input
              placeholder=""
              type={show}
              // value={pass}
              onChange={(e) => setCode(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <button
              type="button"
              onClick={handleToggler}
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }'
              className="absolute top-0 end-0 flex items-center p-3 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <Icon icon={hider} size={17} />
            </button>
          </div>
        </div>
      </div>
      <button
        className="btn btn-enabled w-full max-w-xs hover:bg-green-500 hover:text-white"
        aria-disabled="true"
        type="submit"
      >
        Үргэлжлүүлэх
      </button>
    </div>
  );
}
