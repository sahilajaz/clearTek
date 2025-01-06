"use client"; 

import React from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/pages/home");
  };

  return (
    <section className="w-52 mx-20 lg:w-full h-full bg-black flex  pt-32">
      <div className="w-full flex flex-col justify-center items-center gap-5 shadow-xl">
        <h1 className="text-white text-4xl">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="w-[260px] mr-10 sm:w-[500px] bg-black border border-white text-white px-5 py-1 placeholder:white"
            placeholder="demo"
            defaultValue="demo"
          />
          <input
            type="password"
            className="w-[260px] mr-10 sm:w-[500px] bg-black border border-white text-white px-5 py-1 placeholder:white"
            placeholder="password"
            defaultValue="12345"
          />
          <button
            type="submit"
            className="w-1/3 border border-white text-white rounded-lg px-5 py-1"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
