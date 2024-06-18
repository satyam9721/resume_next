import { AboutMe } from "@/lib/resume";

export default function Home() {
  return (
   
    <main>

      <p className="text-slate-300 text-justify">
        {AboutMe}
      </p>
    </main>
  );
}
