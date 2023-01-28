import React, { useEffect, useState } from "react";
import { Loader2, Loader3 } from "../components/loader";
import useCart from "../components/context/cartHooks";
import Image from "next/image";
import { Toalvalue } from "../components/utils/countryHandle";
import { getLocalstorage } from "../components/utils/getlocalstorage";
import { useRouter } from "next/router";
import { supabase } from "../components/supabase/supabase";
import displayRazorpay from "../components/paymentbutton/razorpay";
import CartContextProvider from "../components/context/cartContext";
import {
  FormatingCurrency,
  removeUnwantedEntry,
} from "../components/utils/feture";
const country = require("../components/jsondata/country.json");

export default function Checkout(props) {
  const initialvalue = {
    firstname: "",
    lastname: "",
    user_mobile_number: "",
    email: "",
    user_address_line_1: "",
    user_address_line_2: "",
    user_city: "",
    user_country: "India",
    user_zipcode: "",
  };
  const [inputvalue, setinputvalue] = useState(initialvalue);
  const [loader, setloader] = useState(true);
  const [loader2, setloader2] = useState(false);

  const [formErrors, setFormErrors] = useState(initialvalue);
  const [error, seterror] = useState("");
  const { cartItem } = useCart();
  const [item, setitem] = useState([]);
  const [user, setuser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // console.log(await Toalvalue());
    if (cartItem) {
      setitem(cartItem);
      setloader(false);
    } else {
      router.push("/");
    }
  }, [cartItem]);

  const data = getLocalstorage("user");

  useEffect(() => {
    if (data) {
      setuser(data);
      setinputvalue((prev) => ({ ...prev, email: user?.email }));
    }
  }, []);

  if (error) {
    setTimeout(() => seterror(""), 4000);
  }

  const validate = (values) => {
    let error = {};
    if (values.user_mobile_number.toString().length < 10) {
      error.user_mobile_number = "*required";
    }

    if (values.user_address_line_1.trim() == "") {
      error.user_address_line_1 = "*required";
    }
    if (!values.email) {
      error.email = "*required";
    }
    if (values.user_city.trim() == "") {
      error.user_city = "*required";
    }
    if (values.lastname.trim() == "") {
      error.lastname = "*required";
    }
    if (values.firstname.trim() == "") {
      error.firstname = "*required";
    }

    if (values.user_zipcode.trim() == "") {
      error.user_zipcode = "*required";
    }
    return error;
  };

  const submitingform = async (e) => {
    e.preventDefault();
    if (Object.keys(validate(inputvalue)).length !== 0) {
      setFormErrors(validate(inputvalue));
      seterror("All detailed must be filled");
    }
    if (Object.keys(validate(inputvalue)).length === 0) {
      setloader2(true);
      const entry = await updatedatabase(
        removeUnwantedEntry(item),
        inputvalue,
        Toalvalue().totalformat
      );
      console.log(entry);
      await displayRazorpay(
        inputvalue.email,
        inputvalue.firstname + " " + inputvalue.lastname,
        inputvalue.user_mobile_number,
        Toalvalue().totalvalue,
        entry
      );
    } else {
      setFormErrors(validate(inputvalue));
    }
  };

  const updatedatabase = async (product, userdata, total) => {
    const { data, error } = await supabase.from("order_history").insert({
      user_details: userdata,
      total_price: total,
      product_details: product,
      // quantity: "",
      // order_id: "",
    });
    if (!error) {
      setloader2(false);
      return data[0].id;
    } else {
      setloader2(false);
      return null;
    }
  };

  if (loader2) {
    setTimeout(() => setloader2(false), 5000);
  }

  const handleinput = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputvalue, [name]: value });
  };

  const handleNumber = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputvalue, [name]: parseInt(value) });
  };

  const handleselect = (e) => {
    const { value, name } = e.target;
    if (value !== "India") {
      setinputvalue((prev) => ({
        ...prev,
        user_country: value,
        user_state: "",
      }));
    } else {
      setinputvalue((prev) => ({ ...prev, [name]: value }));
    }
  };
  if (error) {
    setTimeout(() => seterror(null), 3000);
  }

  // bg-[#f9f8f8]

  if (loader) {
    setTimeout(() => setloader(false), 5000);
  }

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className=" bg-[#E1E9FF]">
          <div className="flex  w-full  items-start lg:flex-row flex-col">
            <div className="flex flex-col px-5  lg:w-3/5 2xl:w-full border-[#B9C4DF] border-r pb-14 md:pb-24 pt-6  w-full bg-white h-full w-full   gap-5">
              <div className="max-w-lg w-full mx-auto 2xl:ml-auto 2xl:mr-[200px] flex flex-col gap-5">
                <div>
                  <div className={` md:pt-10`}>
                    <img
                      src="/img/logo-no-background.svg"
                      className="w-[200px]"
                    />
                  </div>
                </div>

                <div className=" text-sm w-full border-zinc-200 pt-4 ">
                  <p className="text-red-500 text-lg"> </p>
                </div>

                <div className="flex  flex-col  w-full gap-4">
                  <h5 className="md:text-xl font-semibold text-lg">
                    Contact Information
                  </h5>

                  <div>
                    <div className="flex relative flex-col gap-2  w-full">
                      <input
                        autoComplete="off"
                        autoCorrect="off"
                        type="email"
                        id="email"
                        value={inputvalue.email}
                        required
                        placeholder=" "
                        onChange={handleinput}
                        name="email"
                        className={`${
                          formErrors.email
                            ? "border-red-400"
                            : "border-zinc-500"
                        }  focus:ring-2 focus:ring-blue-200 focus:border-blue-600 st text-[15px]   h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                      />
                      <label
                        htmlFor="email"
                        className="whitespace-nowrap labelt "
                      >
                        Email
                      </label>
                    </div>
                    <div className="flex mt-5 relative flex-col gap-2 w-full">
                      <input
                        autoComplete="off"
                        autoCorrect="off"
                        type="number"
                        minLength="9"
                        maxLength="11"
                        value={inputvalue.user_mobile_number}
                        required
                        onChange={handleNumber}
                        placeholder=" "
                        id="number"
                        name="user_mobile_number"
                        className={`${
                          formErrors.user_mobile_number
                            ? "border-red-400"
                            : "border-zinc-500"
                        }  focus:ring-2 focus:ring-blue-200 focus:border-blue-600 st text-[15px]  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                      />
                      <label
                        htmlFor="number"
                        className="whitespace-nowrap labelt "
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 border-zinc-300 mt-3 flex-col gap-5">
                  <h5 className="md:text-xl font-semibold text-lg">
                    Enter Your Delivery Details
                  </h5>
                  <form
                    className="flex w-full gap-5  md:gap-10 mx-auto  flex-col"
                    onSubmit={submitingform}
                  >
                    <div className="flex gap-5 flex-col">
                      <div className="flex gap-8 md:flex-row flex-col">
                        <div className="flex relative flex-col gap-2 w-full">
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            value={inputvalue.firstname}
                            required
                            onChange={handleinput}
                            placeholder=" "
                            id="fname"
                            name="firstname"
                            className={`${
                              formErrors.lastname
                                ? "border-red-400"
                                : "border-zinc-500"
                            }  focus:ring-2 focus:ring-blue-200 focus:border-blue-600 st text-[15px]   h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                          />
                          <label
                            htmlFor="fname"
                            className="whitespace-nowrap labelt "
                          >
                            First name
                          </label>
                        </div>

                        <div className="flex relative flex-col gap-2 w-full">
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            value={inputvalue.lastname}
                            required
                            onChange={handleinput}
                            placeholder=" "
                            id="lname"
                            name="lastname"
                            className={`${
                              formErrors.lastname
                                ? "border-red-400"
                                : "border-zinc-500"
                            }  text-[15px] st focus:ring-2 focus:ring-blue-200 focus:border-blue-600  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                          />
                          <label
                            htmlFor="lname"
                            className="whitespace-nowrap labelt "
                          >
                            Last name
                          </label>
                        </div>
                      </div>
                      <div className="flex w-full flex-col gap-2 ">
                        <select
                          onChange={handleselect}
                          name="user_country"
                          defaultValue={inputvalue.user_country}
                          className="w-full h-[50px] bg-white  p-2  !border-zinc-500 rounded  text-zinc-800 border  focus:ring-2 focus:ring-blue-200 focus:border-blue-600  focus:outline-none"
                        >
                          <option value="India">India</option>
                          {/*{country.map((item, i) => (*/}
                          {/*  <option value={item.country_name} key={i}>*/}
                          {/*    {item.country_name}*/}
                          {/*  </option>*/}
                          {/*))}*/}
                        </select>
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex w-full flex-col gap-5">
                          <div className="w-full relative">
                            <input
                              autoComplete="off"
                              autoCorrect="off"
                              type="text"
                              placeholder=" "
                              id="address1"
                              value={inputvalue.user_address_line_1}
                              required
                              onChange={handleinput}
                              name="user_address_line_1"
                              className={`${
                                formErrors.user_address_line_1
                                  ? "border-red-400"
                                  : "border-zinc-500"
                              }  focus:ring-2 focus:ring-blue-200 focus:border-blue-600 st text-[15px] h-[50px]   border w-full rounded  text-zinc-800 p-2 outline-none`}
                            />
                            <label
                              htmlFor="address2"
                              className="whitespace-nowrap labelt "
                            >
                              Address
                            </label>
                          </div>
                          <div className="relative w-full">
                            <input
                              autoComplete="off"
                              autoCorrect="off"
                              type="text"
                              id="address2"
                              placeholder=" "
                              value={inputvalue.user_address_line_2}
                              required
                              onChange={handleinput}
                              name="user_address_line_2"
                              className={`${
                                formErrors.user_address_line_2
                                  ? "border-red-400"
                                  : "border-zinc-500"
                              }  focus:ring-2 focus:ring-blue-200 focus:border-blue-600 st text-[15px]  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none w-full`}
                            />
                            <label
                              htmlFor="address2"
                              className="whitespace-nowrap labelt "
                            >
                              Apartment, suits, etc (optional)
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-6 md:gap-7 sm:flex-row flex-col ">
                        <div className="flex relative flex-col gap-2 w-full">
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            placeholder=" "
                            id="city"
                            value={inputvalue.user_city}
                            required
                            onChange={handleinput}
                            name="user_city"
                            className={`${
                              formErrors.user_city
                                ? "border-red-400"
                                : "border-zinc-500"
                            } focus:ring-2 focus:ring-blue-200 focus:border-blue-600 st text-[15px]   h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                          />
                          <label
                            htmlFor="city"
                            className="whitespace-nowrap labelt "
                          >
                            City
                          </label>
                        </div>
                        <div className="flex relative flex-col gap-2  w-full">
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            id="zip"
                            value={inputvalue.user_zipcode}
                            required
                            placeholder=" "
                            onChange={handleinput}
                            name="user_zipcode"
                            className={`${
                              formErrors.user_zipcode
                                ? "border-red-400"
                                : "border-zinc-500"
                            }  focus:ring-2 focus:ring-blue-200 focus:border-blue-600 st text-[15px]   h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                          />
                          <label
                            htmlFor="zip"
                            className="whitespace-nowrap labelt "
                          >
                            Postalcode
                          </label>
                        </div>
                      </div>

                      <div className="grid gap-6 md:gap-7 w-full md:grid-cols-3 grid-cols-1 "></div>
                    </div>
                    {error && <ErrorButton text={error} />}

                    <button
                      onClick={submitingform}
                      disabled={loader2}
                      className={`${
                        !loader2 ? "cursor-pointer" : "cursor-not-allowed"
                      } text-[18px] ml-auto  bg-zinc-800 text-white font-semibold  max-w-[250px] hover:bg-zinc-700 py-4 md:px-10 px-5 rounded`}
                    >
                      {loader2 ? <Loader3 /> : "Checkout"}
                    </button>

                    <div className="md:mt-10 mt-5 text-sm border-t border-zinc-200 pt-4 ">
                      <span>All rights reserved WrapKit.</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full lg:border-t-none 2xl:w-full border-t md:border-transparent border-[#B9C4DF]  lg:w-2/5  pt-6 pb-20 h-full">
              <div className=" lg:max-w-md px-5 mx-auto flex flex-col gap-5 lg:gap-7 2xl:mr-auto 2xl:ml-[200px]">
                <div className="flex max-h-[350px] overflow-y-scroll flex-col items-center">
                  {item.map((data, i) => (
                    <div
                      key={i}
                      className="flex  items-start py-3 justify-between w-full border-b border-zinc-300 gap-4"
                    >
                      <div className="min-w-[100px] bg-white rounded-md relative">
                        <Image
                          src={data?.image[0]}
                          width={80}
                          height={80}
                          layout="responsive"
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex  justify-between w-full items-center">
                        <div className=" flex w-full gap-1 justify-between flex-col">
                          <h2 className="font-semibold capitalize md:text-[18px] leading-6 inline-block">
                            {data?.name}
                          </h2>
                          <div className="text-[15px]">
                            <p>Device: {data?.optionalData.type}</p>
                            <p>Model: {data?.optionalData.model}</p>
                            <p>Version: {data?.optionalData.version}</p>
                          </div>
                          <div className="flex  justify-between items-center gap-5 flex-row ">
                            <span>Qty : {data?.quantity}</span>
                            <h5 className="md:text-xl text-lg text-left font-semibold sm:mt-0 mt-2 sm:text-right">
                              ₹{FormatingCurrency(data?.price)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-5 flex-col gap-4">
                  <div className="flex justify-between  md:text-lg text-zinc-800    gap-10">
                    Subtotal:{" "}
                    <span className="text-zinc-800 md:text-xl font-semibold text-lg font-cera_bold">
                      {Toalvalue().subtotalformat}
                    </span>
                  </div>
                  <div className="flex text-zinc-800 justify-between md:text-lg  pb-1">
                    Shipping Charges
                    <span className="font-semibold  text-zinc-800 text-lg">
                      {parseInt(
                        Toalvalue()
                          .subtotal.split("")
                          .slice(1, Toalvalue().subtotal.split("").length)
                          .join("")
                      ) >= 1000
                        ? "Free"
                        : "+ ₹0"}
                    </span>
                  </div>

                  <div className="flex border-t border-zinc-300 pt-3  justify-between md:text-lg text-zinc-800 gap-10">
                    Total:{" "}
                    <span className="text-zinc-800 md:text-xl text-lg font-semibold">
                      {Toalvalue().totalformat}
                    </span>
                  </div>
                </div>
                <div className="">
                  <img
                    src="/imgs/credit-card-secure.png"
                    className="w-full"
                    alt="secure payment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function ErrorButton({ text }) {
  return (
    <div className="w-full bg-red-50 border border-red-500  p-3.5 rounded flex items-start gap-3 ">
      <div className="w-[20px]">
        <img src="/imgs/error.svg" alt="error" className="w-full" />
      </div>
      <span className="text-red-500 font-cera_medium mt-[-3px]">{text}</span>
    </div>
  );
}

Checkout.getLayout = function getLayout(page) {
  return (
    <>
      <CartContextProvider>{page}</CartContextProvider>
    </>
  );
};
