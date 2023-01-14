import React, { useEffect, useState } from "react";
import {
  Heading,
  Paragraph,
} from "../../components/commonComponent/commonTextSize";
import { Loader2 } from "../../components/loader";
import { Product } from "../../components/product/productcard";
import Trail from "../../components/react-spring/trailanimation";
import { supabase } from "../../components/supabase/supabase";
import { color, ProductBackground } from "../../components/utils/feture";

export default function ClayGanesha() {
  const [loader, setloader] = useState(true);
  const [product, setproducts] = useState([]);
  // const [allproducts, setallproducts] = useState();

  useEffect(() => {
    fetchProcucts();
  }, []);

  const fetchProcucts = async () => {
    const { data, error } = await supabase.from("laptop").select("*");
    // .order("id", { isActive: true });
    setproducts(data);
    // setallproducts(data);
    setloader(false);
    return data;
  };

  return (
      <div className="pb-24">
        <div className=" overlay md:h-[350px] h-[250px] flex items-center justify-start w-full">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col gap-5 max-w-4xl text-center mx-auto px-5">
              <Heading size="md:text-[50px] text-[30px] sm:text-[40px]">
                LAPTOP SKINS
              </Heading>
              <Paragraph size="md:text-lg " extra="max-w-2xl mx-auto">
                We have a variety of classic designs and materials to choose from. So go ahead and decorate your laptop with one of our cool printed laptop wraps.
              </Paragraph>
            </div>
          </div>
        </div>

        {loader ? (
            <Loader2 />
        ) : (
            <div className="px-5 mt-10 md:mt-4 w-full max-w-7xl mx-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 grid ">
              <Trail open={true}>
                {product.map((item, i) => (
                    <Product
                        key={i}
                        category="laptop"
                        color={ProductBackground(color, i)}
                        url={item?.url}
                        data={item}
                        name={item.name}
                        img={item?.image[0]}
                        amount={item.price}
                    />
                ))}
              </Trail>
            </div>
        )}
      </div>
  );
}
