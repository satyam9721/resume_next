"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import Avatar from "./Avatar";
import Connect from "./Connect";

const SideBar = () => {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };
  return (
    <div
      className={cn(
        "sidebar w-72 h-full rounded-3xl bg-[#21476b] border border-[#3e76ab] p-4 lg:block  hover:shadow-[#ffcd67] cursor-pointer shadow-2xl relative duration-300 ease-linear",
        collapse && "w-20"
      )}
    >
      <Avatar />
      <div className="absolute -right-3 top-14 text-[#ffcd67]">
        {collapse ? (
          <ArrowBigRightDash onClick={handleCollapse} />
        ) : (
          <ArrowBigLeftDash onClick={handleCollapse} />
        )}
      </div>

      <Connect />
    </div>
  );
};

export default SideBar;
