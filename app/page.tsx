"use client";
import { useState } from "react";

type form = {
  name?: string;
  lastName: string;
  password: string;
  retypePassword?: string;
  contact?: string;
  email?: string;
};

export default function Home() {
  const [texttype, setTexttype] = useState<boolean>(false);
  const [texttype1, setTexttype1] = useState<boolean>(false);
  const [signIn, setSignIn] = useState<boolean>(true);
  const [formdata, setFormdata] = useState<form>({
    name: "",
    lastName: "",
    password: "",
    retypePassword: "",
    contact: "",
    email: "",
  });
  return (
    <div className=" w-full h-full flex">
      <div className=" hidden sm:block w-1/2 h-screen ">
        <img
          alt="picture"
          src={signIn ? "/Picture2.png" : "/Picture1.png"}
          className={`${signIn ? " w-full h-full" : null}`}
        />
      </div>
      <div className="w-full sm:w-1/2">
        <form
          action=""
          className=" w-full flex items-center h-screen   justify-center"
        >
          <div className="bg-white shadow-lg rounded-lg w-[90%]  sm:w-[60%] p-[4%]  mt-10 ">
            <div className=" flex justify-between mt-4     items-center text-purple-900">
              {" "}
              <p className=" text-[2rem]  font-bold ">
                Let us know <span className=" text-red-700">!</span>
              </p>
              {!signIn && (
                <p
                  onClick={(e) => setSignIn(true)}
                  className=" text-lg font-bold underline cursor-pointer text-purple-900"
                >
                  Sign <span className=" text-red-700">In</span>
                </p>
              )}
            </div>
            {!signIn && (
              <input
                type="text"
                name=""
                placeholder="First Name"
                id=""
                required
                className="  outline-none placeholder:text-black h-8 pl-2 mt-4 w-full  text-black border-b-2"
              />
            )}
            <div className="mt-4">
              <input
                type={signIn ? "email" : "text"}
                name=""
                placeholder={signIn ? "Email" : "Last Name"}
                id=""
                required
                className=" outline-none placeholder:text-black text-black w-full h-8 pl-2  border-b-2"
              />
            </div>

            <div className="   border-b-2 w-full mt-4 flex">
              <input
                type={texttype ? "text" : "password"}
                name=""
                placeholder={signIn ? "Password" : "Set Password"}
                id=""
                required
                className=" placeholder:text-black outline-none  w-[94%] text-black  h-8 pl-2 "
              />
              {!texttype && (
                <img
                  src="/eye.png"
                  alt=""
                  onClick={() => setTexttype(true)}
                  className="w-7 h-7 cursor-pointer "
                />
              )}

              {texttype && (
                <img
                  src="/eyeClose.png"
                  alt=""
                  onClick={() => setTexttype(false)}
                  className="w-7 h-7 cursor-pointer  "
                />
              )}
            </div>
            {!signIn && (
              <div className=" mt-4 w-full border-b-2 flex">
                <input
                  type={texttype1 ? "text" : "password"}
                  name=""
                  placeholder="Retype Password"
                  id=""
                  required
                  className=" placeholder:text-black outline-none text-black h-8 pl-2  w-[94%] "
                />
                {!texttype1 && (
                  <img
                    src="/eye.png"
                    alt=""
                    onClick={() => setTexttype1(true)}
                    className="w-7 h-7  cursor-pointer"
                  />
                )}

                {texttype1 && (
                  <img
                    src="/eyeClose.png"
                    alt=""
                    onClick={() => setTexttype1(false)}
                    className="w-7 h-7 cursor-pointer"
                  />
                )}
              </div>
            )}
            {!signIn && (
              <div className=" mt-4">
                <input
                  type="text"
                  name=""
                  placeholder="Contact Mode"
                  id=""
                  required
                  className=" placeholder:text-black outline-none text-black h-8 pl-2  w-full border-b-2"
                />
              </div>
            )}
            {!signIn && (
              <div className=" mt-4">
                <input
                  type="text"
                  name=""
                  placeholder="Email"
                  id=""
                  required
                  className="  placeholder:text-black outline-none text-black h-8 pl-2 w-full border-b-2"
                />
              </div>
            )}

            <div className=" mt-4">
              <button
                type="submit"
                className=" w-full  rounded-lg h-11 bg-purple-900"
              >
                Sign Up
              </button>
            </div>
            {signIn && (
              <button
                onClick={() => setSignIn(false)}
                className=" border-purple-900  h-11  text-purple-900 rounded-lg border-2 mt-2  w-full"
              >
                Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
