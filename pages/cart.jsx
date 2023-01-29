import useCart from "../components/context/cartHooks";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Toalvalue } from "../components/utils/countryHandle";
import { FormatingCurrency } from "../components/utils/feture";
import Image from "next/image";

export default function Cart() {
  const { cartItem } = useCart();
  const [item, setitem] = useState([]);

  useEffect(() => {
    let mouted = true;
    if (mouted) {
      setitem(cartItem);
    }
    return () => {
      mouted = false;
    };
  }, [cartItem]);

  const router = useRouter();
  return (
    <div className={`bg-gray-50 pt-14 w-full min-h-screen pb-24`}>
      {item.length === 0 ? (
        <div className="justify-center items-start flex">
          <div className="flex items-center mt-[100px] w-full justify-center flex-col gap-7 px-5">
            <h2 className="md:text-4xl text-center text-3xl text-zinc-800">
              Your shopping bag is empty
            </h2>
            <p className="md:text-xl text-lg text-zinc-700 text-center max-w-md">
              Continue shopping our eco friendly ganesha
            </p>
            <button
              onClick={() => router.push("/")}
              className="border border-zinc-800 hover:bg-zinc-800 hover:text-white text-zinc-800 py-3 px-7 max-w-xs"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex gap-10 max-w-6xl mx-auto ">
          <div className="w-full  flex gap-10 flex-col items-start">
            <h3 className="md:text-4xl text-3xl font-semibold text-zinc-800 px-5">
              Shopping Bag
            </h3>
            <div className="w-full flex gap-10 md:flex-row flex-col px-5 sm:px-3">
              <div className=" md:w-4/6  ">
                <div className="bg-white flex flex-col divide-y divide-slate-200">
                  {item.map((item, i) => (
                    <CartItemList data={item} cartid={i} key={i} />
                  ))}
                </div>
              </div>
              <div className=" w-full md:w-2/6 ">
                <div className="bg-white border  shadow-md shadow-zinc-200/50 rounded flex flex-col gap-3  py-7">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold px-5 pb-3">
                      Summary
                    </h3>
                  </div>
                  <div className="mt-5">
                    <div className="flex md:text-xl text-lg text-zinc-600 justify-between pb-3 px-6">
                      Subtotal{" "}
                      <span className="font-semibold md:text-2xl text-xl text-zinc-800">
                        {Toalvalue().subtotalformat}
                      </span>
                    </div>
                    <div className="flex text-zinc-600 md:text-xl text-lg justify-between py-3 px-6">
                      Shipping Charges
                      <span className="font-semibold md:text-2xl text-xl text-zinc-800 ">
                        FREE
                        {/*{parseInt(*/}
                        {/*  Toalvalue()*/}
                        {/*    .subtotal.split("")*/}
                        {/*    .slice(1, Toalvalue().subtotal.split("").length)*/}
                        {/*    .join("")*/}
                        {/*) >= 1000*/}
                        {/*  ? "Free"*/}
                        {/*  : "+ ₹0"}*/}
                      </span>
                    </div>
                    <div className="flex mt-4 pt-5 md:text-xl text-lg border-t justify-between text-zinc-800 px-6 font-cera_medium pb-6">
                      Total{" "}
                      <span className="font-semibold text-zinc-800 md:text-2xl text-xl">
                        {Toalvalue().totalformat}
                      </span>
                    </div>
                  </div>
                  <div className="px-5 flex justify-center">
                    <button
                      onClick={() => router.push("/checkout")}
                      className="rounded-full py-4 md:text-lg w-full hover:bg-zinc-700 px-7 bg-zinc-800 text-white font-bold"
                    >
                      Go To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CartItemList({ data, cartid }) {
  // const [optonal,setoptional]  = useState(false);
  const { increase, decrease, removeCart } = useCart();
  const [qty, setqty] = useState({ qty: data.quantity });

  const handleincrase = () => {
    increase(data);
    setqty((prev) => ({ qty: prev.qty + 1 }));
  };
  const handledecrease = () => {
    decrease(data);
    setqty((prev) => ({ qty: prev.qty - 1 }));
  };
  return (
    <>
      <div className={`p-5 flex gap-4 items-start`}>
        <div className="relative  md:w-[160px] bg-zinc-100 w-[150px] ">
          <Image
            src={data?.image[0]}
            alt={data.name}
            layout="responsive"
            objectFit="cover"
            width={80}
            style={{ borderRadius: "5px" }}
            height={80}
            className="rounded-md"
          />
        </div>
        <div className="flex relative flex-col justify-around  w-full pr-7 pb-2">
          <button
            onClick={() => removeCart(cartid)}
            className="absolute text-zinc-400 hover:bg-gray-50 rounded-full p-2 -top-2  sm:top-3 -right-2 sm:right-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-3">
            <h6 className="capitalize font-semibold md:text-xl text-lg">
              {data.name}
            </h6>
            <div className="text-[15px]">
              <p>Device: {data?.optionalData.type}</p>
              <p>Model: {data?.optionalData.model}</p>
              <p>Version: {data?.optionalData.version}</p>
            </div>
            <div className="flex  justify-between items-center gap-5 flex-row ">
              <div className="flex rounded-[10px] max-w-[100px] px-2 w-full   border border-zinc-300">
                <button
                  onClick={handledecrease}
                  className={`${
                    data.quantity === 1
                      ? "text-zinc-300 cursor-not-allowed"
                      : ""
                  } py-1 `}
                  disabled={data.quantity === 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 12H6"
                    />
                  </svg>
                </button>
                <span className="py-1 sm:py-2 px-1 w-full text-center">
                  {data.quantity}
                  {/*{qty.qty}*/}
                </span>
                <button onClick={handleincrase} className="py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <h5 className="md:text-2xl text-xl text-left font-semibold sm:mt-0 mt-2 sm:text-right">
                ₹{FormatingCurrency(data?.price)}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
