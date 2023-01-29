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

  const percentage = (val, val2) => {
    return Math.round((val / val2) * 100);
  };

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
        <div className=" flex relative  flex-col gap-x-1 gap-y-1 justify-between ">
          <h5
            style={{ lineHeight: 1.4 }}
            onClick={() => router.push(`/${props.category}/${props.url}`)}
            className="text-[16px] sm:text-[18px] mb-1 font-semibold cursor-pointer line text-zinc-700"
          >
            {props?.name}
          </h5>
          <div className="flex gap-1 items-center">
            <h5 className="sm:text-lg font-semibold text-zinc-900 flex gap-3 items-center">
              ₹{FormatingCurrency(props.amount)}
            </h5>
            <h5 className="text-xm sm:text-base line-through font-regular  text-zinc-500 flex gap-3 items-center">
              ₹{FormatingCurrency(props.data.strike_price)}
            </h5>
            <span className="text-orange-500 text-xs  md:text-base">
              ({percentage(props.amount, props.data.strike_price)} % OFF)
            </span>
          </div>
          <Link
            href={{
              pathname: `/${props.category}/product`,
              query: { q: props.url },
            }}
            passHref
          >
            <div className="absolute cursor-pointer top-2 right-2">
              <svg
                className="sm:w-6 w-5  stroke-current h-5 sm:h-6"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 1.5L2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V4.5L13.5 1.5H4.5Z"
                  strokeWidth="1.08"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M2.25 4.5H15.75"
                  strokeWidth="1.08"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 7.5C12 8.29565 11.6839 9.05871 11.1213 9.62132C10.5587 10.1839 9.79565 10.5 9 10.5C8.20435 10.5 7.44129 10.1839 6.87868 9.62132C6.31607 9.05871 6 8.29565 6 7.5"
                  strokeWidth="1.08"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
