import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BaseSection from "../../components/commonComponent/baseSection";
import useCart from "../../components/context/cartHooks";
import { Loader2 } from "../../components/loader";
import { isInCart } from "../../components/product/feture_product";
import { supabase } from "../../components/supabase/supabase";
import {FormatingCurrency, handleAmount} from "../../components/utils/feture";
import CommonSelect from "../../components/commonComponent/commonSelect";
import {deviceType, model, versionname} from "../../components/jsondata/device";
import {FormError} from "../../components/error/formerrortext";
import dynamic from "next/dynamic";
const Popupcart = dynamic(()=> import("../../components/product/popupcart"),{
  ssr:false
})

export default function ClayGaneshaSlug() {
  const [qty, setqty] = useState({ qty: 1 });
  const [activetab,setactivetab] = useState("desc");
  const [popup, setpopup] = useState(false);
  const [error,seterror] = useState(null);
  const [product, setproducts] = useState(null);
  const { addtocart, increase, decrease, cartItem } = useCart();
  const [device,setdevice] = useState({
    model:"",
    version:"",
    type:""
  });
  const router = useRouter();

  useEffect(() => {
    const id = router.asPath.split("/")[2].split("=")[1];
    fetchGanesha(id);
  }, [router]);

  const fetchGanesha = async (id) => {
    const { data, error } = await supabase
        .from("mobile")
        .select("*")
        .eq("url", id)
        .single();
    // .order("id", { isActive: true });
    setproducts(data);
    return data;
  };

  const handledecrease = () => {
    if (isInCart(product, cartItem)) {
      decrease(product);
      setqty((prev) => ({ qty: prev.qty - 1 }));
    } else if (!isInCart(product, cartItem)) {
      setqty((prev) => ({ qty: prev.qty - 1 }));
    }
  };
  const handleincrase = () => {
    if (isInCart(product, cartItem)) {
      increase(product);
      setqty((prev) => ({ qty: prev.qty + 1 }));
    } else if (!isInCart(product, cartItem)) {
      setqty((prev) => ({ qty: prev.qty + 1 }));
    }
  };

  const handleadddtocart = () => {
    if(device.type == ""){
      seterror("Please select device type")
    }
    else if(device.model == ""){
      seterror("Please select device model")
    }
    else if(device.version == ""){
      seterror("Please select device version")
    }
    else {
      // isInCart(product, cartItem) ? setpopup(true) : "";
      addtocart({...product, optionalData: device, quantity: qty.qty});
      setpopup(true);
    }
  };

  const handleClick = (e) => {
    const title = e.currentTarget.title;
    if(activetab == title){
      setactivetab("")
    }
    else {
      setactivetab(title);
    }
    };


  const obj = {
    description:["Skins are a thin sheet-like overlay that’s custom made to fit to the back of your device. Light and weightless, they look good without any bulk. No gaps. No residue. ","And the texture’s great too. Say goodbye to scratches and marks, say hello to an effortlessly stylish upgrade for your device."],
    specification:['Wrapkit skins are thin textured self adhesive sheets that are precisely cut for your device. Unlike traditional cases and covers, you can stylize your device without adding bulk and keep its form factor. It also protects your devices from scratches and fingerprints, and the texture gives your charger a better grip.'],
    features: [
      { title: "Protection from Scratches", img: "scratch_protection" },
      { title: "3M Material", img: "3M" },
      { title: "Heat Dispersion", img: "Heat" },
      { title: "Wireless Charging", img: "Wirelesssvg" },
      { title: "Reduce Free Removal", img: "Residue" },
      { title: "Bubble Free Application", img: "bubble_free" },
    ],
  };

  const handleChange = (e,key)=> {
    setdevice(prev=> ({...prev,[key]: e}))
  }

  if(error){
    setTimeout(()=> seterror(null),5000);
  }


  return (
      <>
        {popup &&
        <Popupcart
            active={popup}
            qty={1}
            data={cartItem}
            passclose={() => setpopup(false)}
        />
        }
        {product ? (
            <>
              <BaseSection>
                <div className="min-h-screen pb-20 bg-[#F7F7F7] overflow-x-hidden">
                  <div className="md:pt-10 truncate pt-10">
                    <div className="flex gap-2 items-center text-zinc-500 max-w-7xl px-5 mx-auto">
                      <Link href="/">
                        <a className="hover:text-green-700 text-zinc-800">Home</a>
                      </Link>
                      /
                      <Link href="/phone">
                        <a className="hover:text-green-700 text-zinc-800">
                          phone
                        </a>
                      </Link>
                      /
                      <span className="whitespace-nowrap max-w-xs w-full truncate">
                    {product?.url}
                  </span>
                    </div>
                    <div className="max-w-7xl w-full mx-auto pt-8 md:flex-row flex-col gap-10 md:gap-20 flex px-5">
                      <div className=" w-full md:w-1/2">
                        <div className="flex-col-reverse flex gap-2">
                          <div className="bg-gray-50 block responsive w-full rounded-md">
                            <Image
                                layout="responsive"
                                objectFit="cover"
                                objectPosition="center"
                                height={100}
                                width={100}
                                loading="lazy"
                                src={
                                  product?.image[0] ? product?.image[0] : ""
                                }
                                alt={product?.name}
                                className="rounded"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 break-words inline-block whitespace-normal 	w-full ">
                        <div className=" flex w-full max-w-md mx-auto flex-col gap-5">
                          <div className="flex w-full flex-col gap-3 ">
                            <h2
                                style={{ lineHeight: 1.3 }}
                                className="text-zinc-900 capitalize font-semibold md:text-4xl text-2xl sm:text-3xl"
                            >
                              {product?.name}
                            </h2>

                            <div className="relative flex items-end gap-3 pb-3 pt-1">
                              <h5 className="md:text-4xl text-3xl font-bold font- text-zinc-900 flex gap-3 items-center">
                                ₹{FormatingCurrency(product?.price)}
                              </h5>
                              <h5 className="md:text-2xl  text-xl line-through  font-semibold  text-zinc-500 flex gap-3 items-center">
                                ₹{FormatingCurrency(product?.strike_price)}
                              </h5>
                              <span className="text-orange-500 text-xl font-semibold">
                                (Rs. {handleAmount(product?.strike_price,product?.price)} OFF)
                              </span>
                            </div>
                            {/*fetures */}
                            <CommonSelect data={deviceType} val={device.type} passSelect={(e)=>handleChange(e,"type")}>
                            <option value=''>Select Device Type</option>
                            </CommonSelect>
                            {device.type !== '' &&
                            <CommonSelect data={model[device.type.toLowerCase()]} val={device.model}
                                          passSelect={(e) => handleChange(e, "model")}>
                              <option value=''>Select Device Model</option>
                            </CommonSelect>
                            }
                            {device.model !== '' &&
                            <CommonSelect data={versionname[device.type.toLowerCase()][device.model.toLowerCase()]} val={device.version}
                                          passSelect={(e) => handleChange(e, "version")}>
                              <option value=''>Select Device</option>
                            </CommonSelect>
                            }
                          </div>

                          <div className="flex w-full flex-col mt-5">
                            <div className="flex gap-3 items-center text-zinc-800 pb-5 md:text-xl">
                              Quantity:
                              <div className="flex py-2 px-2 gap-3 rounded-[10px] max-w-[100px] w-full divide-zinc-200   border border-zinc-300">
                                <button
                                    onClick={handledecrease}
                                    className={`${
                                        qty.qty === 1
                                            ? "text-zinc-300 cursor-not-allowed"
                                            : ""
                                    } w-full`}
                                    disabled={qty.qty === 1}
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
                                <span className="w-full text-center">
                              {qty.qty}
                            </span>
                                <button onClick={handleincrase} className="w-full">
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
                            </div>
                            {error !== null && <FormError text={error}/>}
                            <div className="flex w-full flex-col gap-4 pb-7 mt-5">
                              <button
                                  onClick={handleadddtocart}
                                  className="text-base rounded-full hover:scale-[1.05] transform transition duration-200 ease-in bg-zinc-900 text-white font-semibold hover:bg-zinc-800  p-4  w-full"
                              >
                                ADD TO BASKET
                              </button>
                              <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href={`https://wa.me/918591386693/?text=Hii, Wrapkit, %0a %0a I want to order this ${product?.name} %0a  https://wrapkit.in/phone/product?q=${product?.url}`}
                                  className="text-base rounded-full hover:scale-[1.05] transform transition duration-200 ease-in bg-green-600 uppercase text-white font-semibold hover:bg-green-700 flex gap-3 justify-center items-center  px-4 py-3  w-full"
                              >
                            <span>
                              <svg
                                  className="w-[30px]"
                                  style={{ enableBackground: "new 0 0 512 512" }}
                                  version="1.1"
                                  viewBox="0 0 512 512"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="_x33_75-whatsapp">
                                  <g>
                                    <path
                                        d="M417.103,92.845C374.08,49.721,316.787,26.001,255.897,26.001    c-125.678,0-227.946,102.269-227.946,227.945c0,40.146,10.474,79.37,30.394,113.973l-32.343,118.08l120.852-31.728    c33.268,18.173,70.744,27.724,108.941,27.724h0.103c125.576,0,230.101-102.269,230.101-227.945    C485.998,193.161,460.125,135.97,417.103,92.845z"
                                        style={{ fill: "#2CB742" }}
                                    />
                                    <path
                                        d="M255.897,443.593c-34.089,0-67.46-9.138-96.518-26.388l-6.879-4.107l-71.67,18.789l19.099-69.924    l-4.518-7.187c-18.995-30.188-28.956-64.995-28.956-100.83c0-104.424,85.018-189.44,189.545-189.44    c50.619,0,98.158,19.714,133.892,55.548c35.731,35.835,57.705,83.376,57.603,133.996    C447.495,358.578,360.319,443.593,255.897,443.593z"
                                        style={{ fill: "#fff" }}
                                    />
                                    <path
                                        d="M359.807,301.691c-5.647-2.872-33.677-16.635-38.914-18.48c-5.237-1.952-9.035-2.875-12.834,2.875    s-14.683,18.48-18.073,22.384c-3.285,3.799-6.674,4.312-12.321,1.437c-33.473-16.735-55.445-29.878-77.521-67.768    c-5.853-10.062,5.854-9.344,16.736-31.11c1.85-3.801,0.926-7.086-0.514-9.961c-1.436-2.875-12.834-30.906-17.557-42.304    c-4.62-11.089-9.343-9.549-12.835-9.754c-3.285-0.206-7.086-0.206-10.883-0.206c-3.8,0-9.96,1.438-15.197,7.085    c-5.236,5.75-19.92,19.51-19.92,47.541s20.432,55.139,23.205,58.937c2.874,3.798,40.148,61.299,97.338,86.045    c36.144,15.607,50.314,16.94,68.386,14.271c10.985-1.643,33.679-13.759,38.401-27.107c4.723-13.347,4.723-24.743,3.285-27.105    C369.255,305.901,365.454,304.465,359.807,301.691z"
                                        style={{ fill: "#2CB742" }}
                                    />
                                  </g>
                                </g>
                                <g id="Layer_1" />
                              </svg>
                            </span>
                                Whatsapp Booking
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex md:flex-row md:divide-x md:divide-zinc-300 flex-col gap-10 md:gap-20 mt-14 md:mt-20 max-w-6xl mx-auto px-5">
                    <h2 className="md:text-5xl text-zinc-800 w-full max-w-[450px]  text-4xl sm:text-5xl font-semibold">
                     Product Overview and Specification
                    </h2>
<div className="w-full md:pl-10">
  <ul className="divide-y divide-zinc-300">
    <li  className="flex flex-col">
     <h3 onClick={handleClick} title="desc" className="md:text-2xl cursor-pointer py-6 md:px-7 px-5  text-xl flex justify-between gap-5 items-center">
       Description
       <span>
         {activetab =="desc" ?
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
             </svg>
:
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
             </svg>
         }
                      </span>
     </h3>
      {activetab == "desc" &&
      <div className="flex flex-col md:px-7 px-5 gap-4 pb-7 ">
        {obj.description.map((text, i) => (
            <p key={i} className="md:text-lg font-regular text-zinc-500" dangerouslySetInnerHTML={{__html: text}}></p>
        ))}
      </div>
      }
    </li>
    <li className=" flex flex-col gap-5">
      <h3 onClick={handleClick} title="features" className="py-6 md:px-7 px-5 md:text-2xl cursor-pointer text-xl flex  justify-between gap-5 items-center">
        Features
        <span>
         {activetab =="features" ?
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
             </svg>
             :
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
             </svg>
         }
                      </span>
      </h3>
      {activetab == "features" &&
      <div className="grid grid-cols-2 md:grid-cols-3 md:px-7 px-5  rounded pb-5 ">
        {obj.features.map((item, i) => (
            <div
                key={i}
                className="flex  flex-col items-center gap-3 text-center whitespace-nowrap w-full px-10 py-8"
            >
              <div>
                <img
                    src={`/icon/${item.img}.svg`}
                    className="w-[60px] h-[60px]"
                    alt={item.title}
                />
              </div>
              <h6 className="text-zinc-500 md:text-[16px]">
                {item.title}
              </h6>
            </div>
        ))}
      </div>
      }
    </li>

    <li className=" flex flex-col">
      <h3 onClick={handleClick} title="specification" className="md:text-2xl py-6 md:px-7 px-5 cursor-pointer  text-xl flex justify-between gap-5 items-center">
        Specification
        <span>
         {activetab =="specification" ?
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
             </svg>
             :
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
             </svg>
         }
                      </span>
      </h3>
      {activetab == "specification" &&
      <div className="flex flex-col gap-4 pb-5 md:px-7 px-5">
        {obj.specification.map((text, i) => (
            <p key={i} className="md:text-lg font-regular text-zinc-500" dangerouslySetInnerHTML={{__html: text}}></p>
        ))}
      </div>
      }
    </li>

  </ul>
</div>




                  </div>

                  {/*<ClayRandom name="clay-ganesha" url={product?.url} />*/}
                </div>
              </BaseSection>
            </>
        ) : (
            <Loader2 />
        )}
      </>
  );
}

