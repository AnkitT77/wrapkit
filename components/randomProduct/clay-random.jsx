import React, { useEffect, useState } from "react";
import { Product } from "../product/productcard";
import { supabase } from "../supabase/supabase";
import { color, ProductBackground } from "../utils/feture";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "../loader";

export default function NewArrival({ url, name, redirect, bg }) {
  const fectdata = async (url, name) => {
    if (url) {
      const { data, error } = await supabase
        .from(name)
        .select("*")
        .order("id", { ascending: false })
        // .neq("url", url)
        .limit(4);

      if (error) {
        return;
      } else {
        return data;
      }
    } else {
      const { data, error } = await supabase
        .from(name)
        .select("*")
        .order("id", { ascending: false })
        .limit(4);

      if (error) {
        return;
      } else {
        return data;
      }
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const prod = await fectdata(url, name);
      return prod;
    },
  });

  if (isLoading) return <Loader2 />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div
        className={` ${
          url ? "pt-20 pb-24 flex-col gap-14 flex md:gap-20" : ""
        }  w-full ${bg ? bg : ""} `}
      >
        {url ? (
          <h2 className="md:text-4xl text-3xl font-semibold text-center">
            You May Also like
          </h2>
        ) : (
          ""
        )}

        <div className="px-5 grid  lg:grid-cols-4 place-items-start w-full grid-cols-2 gap-x-5 md:gap-y-10 max-w-7xl mx-auto">
          {data?.map((item, i) => (
            <Product
              key={i}
              category={redirect}
              color={ProductBackground(color, i)}
              url={item.url}
              data={item}
              name={item.name}
              img={item.image[0]}
              amount={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
