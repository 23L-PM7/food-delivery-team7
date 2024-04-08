"use client";

import { UserIcon } from "@/components/icons/UserIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { useState } from "react";
import { Loading } from "@/components/Loading";

export default function UpDateUserProfile() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [profilePic, setProfilePic] = useState(null);

  const [name, setName] = useState("Derrick Munkhbat");
  const [nameEditing, setNameEditing] = useState(false);
  const [tempName, setTempName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("88181074");
  const [phoneNumberEditing, setPhoneNumberEditing] = useState(false);
  const [tempPhoneNumber, setTempPhoneNumber] = useState("");

  const [email, setEmail] = useState("derrick.munkhbat@gmail.com");
  const [emailEditing, setEmailEditing] = useState(false);
  const [tempEmail, setTempEmail] = useState("");

  const handleChangeProfilePic = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const handleUploadProfilePic = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = handleChangeProfilePic;
    input.click();
  };

  const handleEditName = () => {
    setNameEditing(true);
    setTempName(name);
  };

  const handleSaveName = () => {
    setNameEditing(false);
    setName(tempName);
  };

  const handleEditPhoneNumber = () => {
    setPhoneNumberEditing(true);
    setTempPhoneNumber(phoneNumber);
  };

  const handleSavePhoneNumber = () => {
    setPhoneNumberEditing(false);
    setPhoneNumber(tempPhoneNumber);
  };

  const handleEditEmail = () => {
    setEmailEditing(true);
    setTempEmail(email);
  };

  const handleSaveEmail = () => {
    setEmailEditing(false);
    setEmail(tempEmail);
  };

  const handleSave = () => {
    setIsLoading(true);
    const getNewPasswordInputValue = () => {
      console.log({ password });
      setIsLoading(false);
      setMessage("Таны мэдээлэл амжилттай солигдлоо!");
      setTimeout(getNewPasswordInputValue, 3000); // Delay the execution of getNewPasswordInputValue for 3 seconds
    };
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-5 mt-20 mb-5 items-center mx-auto w-[448px] h-[224px] p-5">
          <div className="relative flex justify-center items-center">
            <img
              className="w-[120px] h-[120px] rounded-full border-2 flex justify-center items-center"
              src={
                profilePic
                  ? URL.createObjectURL(profilePic)
                  : "path_to_default_image"
              }
              alt="profile image"
            />

            <button
              onClick={handleUploadProfilePic}
              className="absolute right-0 bottom-0 bg-white border-2 rounded-full p-1"
            >
              <EditIcon />
            </button>
          </div>

          <h1 className="text-3xl font-bold">{name}</h1>
        </div>

        <div className="flex flex-col gap-5 mt-5 mb-20 justify-center items-center mx-auto w-[448px] p-5">
          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex rounded p-2 w-full items-center gap-3">
              <UserIcon />
              <div className="w-full">
                {nameEditing ? (
                  <input
                    placeholder="Нэр..."
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="bg-slate-200 rounded p-2 w-full items-center"
                  />
                ) : (
                  <>
                    <p className="text-slate-400">Нэр</p>
                    <p>{name}</p>
                  </>
                )}
              </div>
            </div>
            <button
              className="p-3"
              onClick={nameEditing ? handleSaveName : handleEditName}
            >
              {nameEditing ? <CheckIcon /> : <EditIcon />}
            </button>
          </div>

          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex rounded p-2 w-full items-center gap-3">
              <PhoneIcon />
              <div className="w-full">
                {phoneNumberEditing ? (
                  <input
                    placeholder="Утасны дугаар..."
                    type="text"
                    value={tempPhoneNumber}
                    onChange={(e) => setTempPhoneNumber(e.target.value)}
                    className="bg-slate-200 rounded p-2 w-full items-center"
                  />
                ) : (
                  <>
                    <p className="text-slate-400">Утасны дугаар</p>
                    <p>{phoneNumber}</p>
                  </>
                )}
              </div>
            </div>
            <button
              className="p-3"
              onClick={
                phoneNumberEditing
                  ? handleSavePhoneNumber
                  : handleEditPhoneNumber
              }
            >
              {phoneNumberEditing ? <CheckIcon /> : <EditIcon />}
            </button>
          </div>

          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex  rounded p-2 w-full items-center gap-3">
              <EmailIcon />
              <div className="w-full">
                {emailEditing ? (
                  <input
                    placeholder="Имэйл хаяг..."
                    type="text"
                    value={tempEmail}
                    onChange={(e) => setTempEmail(e.target.value)}
                    className="bg-slate-200 rounded p-2 w-full items-center"
                  />
                ) : (
                  <>
                    <p className="text-slate-400">Имэйл хаяг</p>
                    <p>{email}</p>
                  </>
                )}
              </div>
            </div>
            <button
              className="p-3"
              onClick={emailEditing ? handleSaveEmail : handleEditEmail}
            >
              {emailEditing ? <CheckIcon /> : <EditIcon />}
            </button>
          </div>

          {/* user info uurchlugdvul todorno tegeed update the info*/}
          <button
            className="btn btn-enabled w-full  hover:bg-green-500 hover:text-white"
            role="button"
            aria-disabled="true"
            onClick={handleSave}
          >
            Хадгалах
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
    </>
  );
}
