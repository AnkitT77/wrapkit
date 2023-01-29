import React, { useState } from "react";
import { FormatingCurrency } from "./formatingcurrency";
import useCart from "../context/cartHooks";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { handleAmount } from "../utils/feture";
import CustomImage from "../utils/customImage";
// import Popupcart from "./popupcart";
export function Product(props) {
  const [popup, setpopup] = useState(false);

  if (popup) {
    setTimeout(() => setpopup(false), 3000);
  }

  const router = useRouter();
  return (
    <>
      <div className="flex  px-0 md:px-4 py-4 flex-col gap-2 w-full group">
        <Link
          href={{
            pathname: `/${props.category}/product`,
            query: { q: props.url },
          }}
        >
          <a
            className={`relative ${props.color} group w-full mb-1 cursor-pointer`}
          >
            <CustomImage
              style="h-[250px] md:h-[330px] w-full"
              alt={props.name}
              img={props?.img}
            ></CustomImage>
            {/*<Image*/}
            {/*  src={props?.img}*/}
            {/*  layout="responsive"*/}
            {/*  objectFit="cover"*/}
            {/*  objectPosition="center"*/}
            {/*  height={180}*/}
            {/*  width={180}*/}
            {/*  className="rounded"*/}
            {/*  //   placeholder="blur"*/}
            {/*  loading="lazy"*/}
            {/*  alt={""}*/}
            {/*/>*/}
            <span className="absolute group-hover:opacity-100 duration-100 ease-linear group-hover:visible invisible opacity-0 uppercase font-semibold bottom-[0px] text-center bg-[#e1e9ff]/80  text-zinc-800 py-3 w-full">
              Quick View
            </span>
          </a>
        </Link>
        <div className=" flex  gap-1 justify-between ">
          <h5
            style={{ lineHeight: 1.4 }}
            onClick={() => router.push(`/${props.category}/${props.url}`)}
            className="text-[18px] mb-1 font-semibold cursor-pointer line text-zinc-700"
          >
            {props?.name}
          </h5>
          <div className="flex gap-2">
            <h5 className="text-lg font-semibold text-zinc-900 flex gap-3 items-center">
              ₹{FormatingCurrency(props.amount)}
            </h5>
            <h5 className="text-base line-through font-regular  text-zinc-500 flex gap-3 items-center">
              ₹{FormatingCurrency(props.data.strike_price)}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
