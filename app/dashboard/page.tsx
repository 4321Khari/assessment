"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className=" w-full h-screen">
      <div className=" w-full h-12 bg-purple-900 flex justify-between px-[2%]">
        <p className=" text-lg font-bold  flex text-white w-[7rem] h-full items-center justify-center ">
          Dashboard
        </p>
        <button
          onClick={() => router.push("/")}
          className="  mt-1 w-[5rem] h-3/4 bg-white rounded-lg text-black text-sm flex items-center justify-center"
        >
          Sign Out
        </button>
      </div>
      <div className=" m-[4%] p-[4%] w-[90%] sm:h-[10rem]  rounded-lg shadow-lg bg-white  flex  text-black ">
        {" "}
        <div className=" ">
          <p className=" text-lg font-medium font"> Welcome , John Doe</p>

          <div className=" flex">
            {" "}
            <p className=" text-black font-bold text-md"> Email:</p>
            <p>abhishek4321u@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
