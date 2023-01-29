import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Category() {
  return (
    <>
      <div className=" w-full no-scrollbar overflow-x-hidden px-5 flex flex-col gap-14  md:py-20 py-14">
        <div className="w-full no-scrollbar max-w-5xl overflow-x-scroll flex flex-row gap-5 md:gap-12 mx-auto ">
          <CategoryItem
            data={{
              image: "/category/c1.webp",
              url: "phone",
              name: "Phone",
            }}
          />

          <CategoryItem
            data={{
              image: "/category/c2.jpeg",
              url: "laptop",
              name: "Laptop",
            }}
          />
          <CategoryItem
            data={{
              image: "/category/c3.webp",
              url: "camera",
              name: "Camera",
            }}
          />
          <CategoryItem
            data={{
              image: "/category/c4.jpg",
              url: "charger",
              name: "Charger",
            }}
          />
          <CategoryItem
            data={{
              image: "/category/tc5.png",
              url: "cards",
              name: "Cards",
            }}
          />
        </div>
      </div>
    </>
  );
}

function CategoryItem({ data }) {
  return (
    <>
      <div className="flex flex-col  gap-2 items-center text-zinc-800  w-full">
        <Link href={`/${data.url}`}>
          <a className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] overflow-hidden group rounded-full bg-blue-100/60 hover:shadow-xl hover:shadow-blue-400/30 p-1.5 select-none">
            <img
              src={data.image}
              className="rounded-full group-hover:scale-[1.02] duration-100 ease-in ease-in w-full  h-full"
            />
          </a>
        </Link>

        <h2 className="md:text-xl text-lg  font-semibold tracking-wide">
          {data.name}
        </h2>
      </div>
    </>
  );
}
