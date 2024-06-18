import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="shadow-xl  text-white h-screen cursor-pointer hover:shadow-[#ffcd67] mx-2 rounded-3xl border border-[#3e76ab] bg-[#21476b]">
      <div className="flex items-center justify-between">
        <div className="m-8">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>
        <div className="mb-14">
          {" "}
          <Navbar />
        </div>
      </div>
    </main>
  );
}
