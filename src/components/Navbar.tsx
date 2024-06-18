"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";

import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";

import Link from "next/link";
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="shadow-xl hover:shadow-[#ffcd67] m-3 rounded-md bg-[#21476b]  flex items-center py-2 px-6 justify-between ">
      <div className="flex items-center gap-2">
        <Link href="/profile">
          {" "}
          <CircleUserRound />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
