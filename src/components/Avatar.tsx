import React from "react";
import Image from "next/image";
import AvatarImg from "/my-avatar.png";
import { Name, Occupation } from "../lib/resume";

const Avatar = () => {
  return (
    <div className="m-5  flex flex-col items-center justify-center gap-4">
      <div className=" rounded-3xl w-fit shadow-2xl icon-box  transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300 bg-[#1a3d5e]">
        {" "}
        <Image src="/my-avatar.png" alt="avatar" width={150} height={150} />
      </div>

      <div className="space-y-3">
        <p className="text-white font-bold text-2xl">{Name}</p>
        <p className="text-white  text-sm bg-[#274b6c] text-center p-1 px-0 rounded-lg">
          {Occupation}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
