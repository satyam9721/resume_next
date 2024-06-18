"use client";
import React from "react";
import Nav from "@/components/Navbar";
import { usePathname } from "next/navigation";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();
  const formattedRoute = pathname.replace("/", ""); // Remove the leading '/'
  const result =
    formattedRoute.charAt(0).toUpperCase() + formattedRoute.slice(1);
  return (
    <main className="shadow-xl  text-white h-screen cursor-pointer hover:shadow-[#ffcd67] mx-2 rounded-3xl border border-[#3e76ab] bg-[#21476b]">
      <div className="flex items-center justify-between">
        <div className="mx-8 mt-4">
          <span className="text-4xl font-bold  ">
            {result == "" ? "About" : result}
          </span>
        </div>

        <Nav />
      </div>
      <div className="p-8">{children}</div>
    </main>
  );
};

export default Layout;
