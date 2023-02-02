import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useCart from "../context/cartHooks";
import Mobilemenu from "./mobilemenu";
import DesktopMenu, { DesktopTheme } from "./desktopMenuContent";

export default function TopNav() {
  const [diaplsymenu, setdisplaymenu] = useState(false);
  const { itemCount } = useCart();
  const [cartitem, setcartitem] = useState(0);
  const [active, setactive] = useState("");

  useEffect(() => {
    setcartitem(itemCount);
  }, [itemCount]);

  const router = useRouter();
  const handleresetlink = (e) => {
    setactive("");
  };

  const handler = () => {
    const list = window.matchMedia("(min-width: 769px)");
    let swipeer = list.matches ? true : false;
    setdisplaymenu(diaplsymenu && swipeer ? false : diaplsymenu);
  };

  useEffect(() => {
    handler(); // invoke once when mounting
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [diaplsymenu]);

  return (
    <>
      {diaplsymenu && <Mobilemenu active={diaplsymenu} passclose={hanlemenu} />}
      <div
        className={`border-b border-zinc-100 bg-white sticky top-0 z-30 w-full`}
      >
        <div className="max-w-7xl w-full bg-white  gap-10 mx-auto px-5 text-zinc-800 flex justify-between items-center ">
          <div className="flex gap-3 items-center">
            <button onClick={() => hanlemenu(true)} className="md:hidden block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="w-[140px] md:w-[150px]">
              <Link href="/">
                <a className="w-full flex justify-start  h-[60px] relative ">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/img/logo-no-background.svg"
                    alt="Wrap kit"
                  />
                </a>
              </Link>
            </div>
          </div>
          <ul
            className={`text-zinc-800 md:flex items-center hidden max-w-max w-full gap-x-4 gap-y-2`}
          >
            <li
              onMouseEnter={() => setactive("select_device")}
              onMouseLeave={() => {
                setactive("");
              }}
              className="py-4"
            >
              <span className="py-1  px-5 font-semibold rounded-full text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
                Select Devices
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5  ${
                    active === "select_device"
                      ? "group-hover:rotate-180 duration-150 ease-in transform"
                      : ""
                  }  `}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div
                className={`top-[67px]  transition-transform duration-[200ms] ease-in border-t border-zinc-200/70 z-10 bg-white absolute shadow-md shadow-gray-300/20 left-0  w-full ${
                  active === "select_device"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-[1.5px]"
                }`}
              >
                <DesktopMenu passclose={handleresetlink} />
              </div>

              {/*<ul className="tooltiparrow shadow-xl text-zinc-800 group-hover:opacity-100 group-hover:visible invisible opacity-0  absolute z-10 w-[220px] top-full left-0 bg-white rounded-xl p-4">*/}
              {/*    <li className="py-2 hover:text-indigo-500 cursor-pointer">*/}
              {/*        <Link href="/charger">*/}
              {/*            <a className="hover:text-indigo-500 font-semibold rounded-full px-3 text-lg cursor-pointer">*/}
              {/*                Phone*/}
              {/*            </a>*/}
              {/*        </Link>*/}
              {/*    </li>*/}
              {/*    <li className="py-2 hover:text-indigo-500 cursor-pointer">*/}
              {/*        <Link href="/phone">*/}
              {/*            <a className="hover:text-indigo-500 font-semibold rounded-full px-3 text-lg cursor-pointer">*/}
              {/*                Tablet*/}
              {/*            </a>*/}
              {/*        </Link>*/}
              {/*    </li>*/}
              {/*    <li className="py-2 hover:text-indigo-500 cursor-pointer">*/}
              {/*        <Link href="/laptop">*/}
              {/*            <a className="hover:text-indigo-500 font-semibold rounded-full px-3 text-lg cursor-pointer">*/}
              {/*                Laptop*/}
              {/*            </a>*/}
              {/*        </Link>*/}
              {/*    </li>*/}
              {/*    <li className="py-2 hover:text-indigo-500 cursor-pointer">*/}
              {/*        <Link href="/all-products">*/}
              {/*            <a className="hover:text-indigo-500 font-semibold rounded-full px-3 text-lg cursor-pointer">*/}
              {/*                All Products*/}
              {/*            </a>*/}
              {/*        </Link>*/}
              {/*    </li>*/}
              {/*</ul>*/}
            </li>
            <li
              onMouseEnter={() => setactive("select_theme")}
              onMouseLeave={() => {
                setactive("");
              }}
              className="py-4"
            >
              <span className="  py-1 px-5 font-semibold rounded-full text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
                Themes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform ${
                    active === "select_theme" ? "group-hover:rotate-180" : ""
                  }  duration-150 ease-in`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div
                className={`top-[67px]  transition-transform duration-[200ms] ease-in border-t border-zinc-200/70 z-10 bg-white absolute shadow-md shadow-gray-300/20 left-0  w-full ${
                  active === "select_theme"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-[1.5px]"
                }`}
              >
                <DesktopTheme passclose={handleresetlink} />
              </div>
              {/*<ul className="tooltiparrow shadow-xl text-zinc-800 group-hover:opacity-100 group-hover:visible invisible opacity-0  absolute z-10 w-[220px] top-full left-0 bg-white rounded-xl p-4">*/}
              {/*    <li className="py-2 hover:text-indigo-500 cursor-pointer">*/}
              {/*        <Link href="/">*/}
              {/*            <a className="hover:text-indigo-500 font-semibold rounded-full px-3 text-lg cursor-pointer">*/}
              {/*                Dark*/}
              {/*            </a>*/}
              {/*        </Link>*/}
              {/*    </li>*/}
              {/*    <li className="py-2 hover:text-indigo-500 cursor-pointer">*/}
              {/*        <Link href="/">*/}
              {/*            <a className="hover:text-indigo-500 font-semibold rounded-full px-3 text-lg cursor-pointer">*/}
              {/*                Into The Wood*/}
              {/*            </a>*/}
              {/*        </Link>*/}
              {/*    </li>*/}
              {/*    <li className="py-2 hover:text-indigo-500 cursor-pointer">*/}
              {/*        <Link href="/">*/}
              {/*            <a className="hover:text-indigo-500 font-semibold rounded-full px-3 text-lg cursor-pointer">*/}
              {/*                The Ripple*/}
              {/*            </a>*/}
              {/*        </Link>*/}
              {/*    </li>*/}
              {/*</ul>*/}
            </li>

            <li className="py-4">
              <Link href="/contact">
                <a className="hover:text-indigo-500 font-semibold rounded-full hover:shadow-lg hover:bg-white py-1 px-5 text-lg cursor-pointer">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          {/* cart */}
          <button
            className="text-zinc-800 hover:text-indigo-500 relative flex gap-1 items-center"
            onClick={() => router.push("/cart")}
          >
            {cartitem > 0 && (
              <div
                className={`font-semibold sm:hidden  absolute bg-indigo-500 text-zinc-100 p-[2px] h-[18px] flex justify-center items-center w-[18px] rounded-full top-[-7px] right-[-2px] text-[13px]`}
              >
                {cartitem > 0 ? cartitem : ""}
              </div>
            )}
            <svg
              className="w-6  stroke-current h-6"
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
            <span className={`font-semibold sm:block hidden text-[17px]`}>
              {cartitem > 0 ? "(" + cartitem + ")" : ""}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
