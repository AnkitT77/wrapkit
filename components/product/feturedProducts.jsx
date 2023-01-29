import React from "react";
import NewArrival from "../randomProduct/clay-random";
export default function FeturedProducts() {
  return (
    <div className="md:py-20 flex flex-col gap-12 py-14 bg-[#F1F6FC]">
      <div className="flex flex-col  text-center justify-center items-center">
        <h2 className="md:text-4xl text-3xl w-full flex-grow  font-bold  text-zinc-800 ">
          New Arrival
        </h2>
      </div>
      <NewArrival redirect="phone" name="mobile" />
    </div>
  );
}
