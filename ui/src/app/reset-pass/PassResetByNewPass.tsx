"use client";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function PassResetByNewPass() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("password");
  const [hider, setHider] = useState(() => eyeOff);
  const [pass, setPass] = useState("");

  const handleSave = () => {
    // TODO: Save data to server

    setMessage("Нууц үг амжилттай солигдлоо");
  };

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
    <>
      <div className="flex flex-col gap-5 mt-40 mb-20 justify-center items-center mx-auto w-[448px] h-[310px] p-5">
        <h1 className="text-2xl">Шинэ нууц үг зохиох </h1>
        <div className="flex flex-col w-full max-w-xs gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Нууц үг</p>

            <div className="relative flex justify-center flex-col ">
              <input
                placeholder="Нууц үг"
                type={show}
                // value={pass}
                onChange={(e) => setPass(e.target.value)}
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

            <div className="relative flex justify-center flex-col ">
              <input
                placeholder="Нууц үг давтах"
                type={show}
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
          <button
            className="btn btn-enabled w-full max-w-xs hover:bg-green-500 hover:text-white"
            role="button"
            aria-disabled="true"
            onClick={handleSave}
          >
            Үргэлжлүүлэх
          </button>
          {message && (
            <div className="alert alert-success fixed bg-white flex gap-5 border-2 rounded-2xl justify-center items-center mx-auto w-[328px] p-5 mt-12 top-10">
              <CheckIcon />
              <h1 className="text-green-800">{message}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
