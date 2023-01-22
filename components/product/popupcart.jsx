import React from "react";
import { FormatingCurrency } from "../utils/feture";
import Link from "next/link";
import { a, useTransition } from '@react-spring/web'

export default function Popupcart({ data,passclose,active }) {

    const transitions = useTransition(active, {
        from: { opacity: 0, translateX: '100px' },
        enter: { opacity: 1, translateX: '0' },
        leave: { opacity: 0.2, translateX: '100px' },
        config: { duration: 100,
            tension: 280, friction: 60
        },
    })


    return (
    <>
        {active &&
        <div onClick={passclose} className="fixed z-30 top-0 left-0 bg-zinc-800/50 h-full w-full"/>
        }
        {transitions((style, i) => (
      <a.div
          style={style}
        className={`flex z-30 flex justify-between duration-200 ease-in fixed w-full h-full shadow-md shadow-gray-200 bg-white top-[0px] right-0 flex-col gap-5 p-6  max-w-[400px]`}
      >
        <div>
          <div className="flex text-zinc-800 border-b pb-4 justify-between font-semibold items-center md:text-xl text-xl">
          YOUR CART
          <button
            onClick={() => passclose(true)}
            className="hover:bg-zinc-100 p-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
          <div className="divide-y max-h-[450px] overflow-y-scroll">
            {data.map((item,i)=>(
              <div key={i} className="flex py-5 items-start gap-5">
                <div className="bg-zinc-100/80 flex justify-center items-center">
                  <img
                      className="w-[120px] rounded"
                      src={item?.image[0]}
                      alt="test"
                  />
                </div>
                <div className="flex justify-between flex-col gap-1">
                  <h5 className="font-semibold capitalize leading-6 text-[20px] text-zinc-800">
                    {item?.name}
                  </h5>
                    <div className="text-[15px]">
                        <p>
                            Device: {item?.optionalData.type}
                        </p>
                        <p>
                            Model: {item?.optionalData.model}
                        </p>
                        <p>
                            Version: {item?.optionalData.version}
                        </p>
                    </div>
                    <div className="text-white flex gap-5 justify-between items-center">
                        <p className="text-zinc-700">QTY: {item.quantity}</p>
                        <div className="flex gap-1">
                            <h5 className="font-bold text-lg text-zinc-800">
                                ₹{FormatingCurrency(parseInt(item?.price) * parseInt(item.quantity))}
                            </h5>
                        </div>
                    </div>
                </div>
              </div>
          ))}
          </div>

        </div>
        <div className="flex flex-col gap-3">
            <Link href="/cart">
          <a className="hover:bg-zinc-800 border border-zinc-800 text-center text-zinc-800 hover:text-white w-full px-5 py-4 rounded hover:bg-zinc-700 font-semibold md:text-xl duration-100 ease-linear">
              View Cart
          </a>
            </Link>

        </div>
      </a.div>
        ))}
    </>
  );
}
