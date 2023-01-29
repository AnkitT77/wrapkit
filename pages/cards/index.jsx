import React from "react";
import {
  Heading,
  Paragraph,
} from "../../components/commonComponent/commonTextSize";
import { Product } from "../../components/product/productcard";
import Trail from "../../components/react-spring/trailanimation";
import { supabase } from "../../components/supabase/supabase";
import { color, ProductBackground } from "../../components/utils/feture";
import { useQuery } from "@tanstack/react-query";

export default function ClayGanesha() {
  // const [page, setpage] = useState(1);

  const fetchProcucts = async () => {
    const { data, error } = await supabase.from("cards").select("*");
    // .range(1, 50);

    // const total = await supabase
    //   .from("mobile")
    //   .select("*", { count: "exact", head: true });

    // .order("id", { isActive: true });
    return data;
  };

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["cards"],
      queryFn: () => fetchProcucts(),
      // keepPreviousData: true,
    });

  return (
    <div className="pb-24">
      <div className=" overlay md:h-[350px] h-[250px] flex items-center justify-start w-full">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col gap-5 max-w-4xl text-center mx-auto px-5">
            <Heading size="md:text-[50px] text-[30px] sm:text-[40px]">
              CARDS SKINS
            </Heading>
            <Paragraph size="md:text-lg " extra="max-w-2xl mx-auto">
              We have a variety of classic designs and materials to choose from.
              So go ahead and decorate your laptop with one of our cool printed
              laptop wraps.
            </Paragraph>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div className=" mt-10 px-5  md:mt-4 w-full max-w-7xl mx-auto md:grid-cols-3 gap-5 grid-cols-2 lg:grid-cols-4 grid ">
            <Trail open={true}>
              {data?.map((item, i) => (
                <Product
                  key={i}
                  category="cards"
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
          {/*<Pagination showing={page * 50} total={data?.total} />*/}
        </>
      )}
    </div>
  );
}
