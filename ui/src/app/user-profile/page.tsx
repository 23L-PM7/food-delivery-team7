"use client";

import { UserIcon } from "@/components/icons/UserIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { TimeIcon } from "@/components/icons/TimeIcon";
import { LogoutIcon } from "@/components/icons/LogoutIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { useState } from "react";

export default function UserProfile() {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const editPage = () => {
    window.location.href = "/user-profile/update-user-profile";
  };

  const logOut = () => {
    window.location.href = "/";
  };

  const jumpToOrderDetails = () => {
    window.location.href = "/orderDetails";
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-5 mt-20 mb-5 justify-center items-center mx-auto w-[448px] h-[224px] p-5">
          <div className="relative">
            <img src="/images/user-photo.jpg" alt="profile picture" />

            <button
              className="absolute right-0 bottom-0 bg-white border-2 rounded-full p-1"
              onClick={editPage}
            >
              <EditIcon />
            </button>
          </div>

          <h1 className="text-3xl font-bold">УгтахБаяр</h1>
        </div>

        <div className="flex flex-col gap-5 mt-5 mb-20 justify-center items-center mx-auto w-[448px] p-5">
          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex  rounded p-2 w-full items-center gap-3">
              <UserIcon />
              <div>
                <p className="text-slate-400">Таны нэр</p>
                <p>УгтахБаяр</p>
              </div>
            </div>
            <button className="p-3" onClick={editPage}>
              <EditIcon />
            </button>
          </div>

          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex rounded p-2 w-full items-center gap-3">
              <PhoneIcon />
              <div>
                <p className="text-slate-400">Утасны дугаар</p>
                <p>88883345</p>
              </div>
            </div>
            <button className="p-3" onClick={editPage}>
              <EditIcon />
            </button>
          </div>

          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex rounded p-2 w-full items-center gap-3">
              <EmailIcon />
              <div>
                <p className="text-slate-400">Имэйл хаяг</p>
                <p>Ugtakhbayr@gmail.com</p>
              </div>
            </div>
            <button className="p-3" onClick={editPage}>
              <EditIcon />
            </button>
          </div>

          <button
            className="flex rounded p-2 w-full items-center gap-3"
            onClick={jumpToOrderDetails}
          >
            <TimeIcon />
            <p>Захиалгын түүх</p>
          </button>

          <button
            onClick={toggleModal}
            className="flex rounded p-2 w-full items-center gap-3"
          >
            <LogoutIcon />

            {/* MODAL */}
            {isShowModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="flex flex-col bg-white border-2 rounded-2xl justify-center items-center mx-auto w-[384px] h-[228px]">
                  <h1 className="text-3xl text-center p-5 font-medium">
                    Та системээс гарахдаа итгэлтэй байна уу?
                  </h1>
                  <div className="flex bg-green-200 justify-around w-full h-full text-2xl rounded-b-xl">
                    <button
                      className="hover:bg-green-500 font-bold w-1/2 rounded-b-xl"
                      onClick={logOut}
                    >
                      Тийм
                    </button>
                    <button
                      onClick={() => setIsShowModal(false)}
                      className="hover:bg-green-500 font-bold w-1/2 rounded-b-xl"
                    >
                      Үгүй
                    </button>
                  </div>
                </div>
              </div>
            )}

            <p>Гарах</p>
          </button>
        </div>
      </div>
    </>
  );
}
