"use client";

import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { Loading } from "@/components/Loading";

export default function Home() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [show1, setShow1] = useState("");
  const [show2, setShow2] = useState("");
  const [hider1, setHider1] = useState(() => eyeOff);
  const [hider2, setHider2] = useState(() => eyeOff);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState("EMAIL"); //email, otp, password

  const getEmailInputValue = () => {
    console.log({ email });
  };

  const getCodeInputValue = () => {
    console.log({ email });
  };

  function handleToggler1() {
    if (show1 === "password") {
      setHider1(eye);
      setShow1("text");
    } else {
      setHider1(eyeOff);
      setShow1("password");
    }
  }

  function handleToggler2() {
    if (show2 === "password") {
      setHider2(eye);
      setShow2("text");
    } else {
      setHider2(eyeOff);
      setShow2("password");
    }
  }

  const handleSave = () => {
    if (password !== confirmPassword) {
      return alert("Нууц үгээ дахин шалгана уу");
      // setMessage("Нууц үг ижил биш байна!");
    }
    setIsLoading(true);
    const getNewPasswordInputValue = () => {
      console.log({ password });
      setIsLoading(false);
      setMessage("Нууц үг амжилттай солигдлоо!");
    };
    setTimeout(getNewPasswordInputValue, 3000); // Delay the execution of getNewPasswordInputValue for 3 seconds
  };

  switch (step) {
    case "EMAIL":
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
            onClick={() => {
              getEmailInputValue();
              setStep("OTP");
            }}
            className="btn btn-enabled w-full max-w-xs hover:bg-green-500 hover:text-white"
            aria-disabled="true"
          >
            Үргэлжлүүлэх
          </button>
        </div>
      );

    case "OTP":
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
                  type={show1}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  type="button"
                  onClick={handleToggler1}
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }'
                  className="absolute top-0 end-0 flex items-center p-3 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  {/* <Icon icon={hider1} size={25} /> */}
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              getCodeInputValue();
              setStep("PASSWORD");
            }}
            className="btn btn-enabled w-full max-w-xs hover:bg-green-500 hover:text-white"
            aria-disabled="true"
            type="submit"
          >
            Үргэлжлүүлэх
          </button>
        </div>
      );

    case "PASSWORD":
      return (
        <div className="flex flex-col gap-5 mt-40 mb-20 justify-center items-center mx-auto w-[448px] h-[310px] p-5">
          <h1 className="text-2xl">Шинэ нууц үг зохиох </h1>
          <div className="flex flex-col w-full max-w-xs gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Нууц үг</p>

              <div className="relative flex justify-center flex-col ">
                <input
                  name="passowrd"
                  id="password"
                  placeholder="Нууц үг"
                  type={show1}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  type="button"
                  onClick={handleToggler1}
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }'
                  className="absolute top-0 end-0 flex items-center p-3 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  {/* <Icon icon={hider1} size={25} /> */}
                </button>
              </div>

              <div className="relative flex justify-center flex-col ">
                <input
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Нууц үг давтах"
                  type={show2}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  type="button"
                  onClick={handleToggler2}
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }'
                  className="absolute top-0 end-0 flex items-center p-3 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  {/* <Icon icon={hider2} size={25} /> */}
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

            {isLoading ? (
              <div className="mt-5">
                <Loading />
              </div>
            ) : (
              message && (
                <div className="alert alert-success fixed bg-white flex gap-5 border-2 rounded-2xl justify-center items-center mx-auto w-[328px] p-5 mt-12 top-10">
                  <CheckIcon />
                  <h1 className="text-green-800">{message}</h1>
                </div>
              )
            )}
          </div>
        </div>
      );
    default:
      return null;
  }
}
