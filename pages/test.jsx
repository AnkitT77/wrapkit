import React, { useEffect } from "react";
import Marque from "../components/commonComponent/marque";
import { supabase } from "../components/supabase/supabase";
import Pagination from "../components/utils/pagination";
import { deviceType } from "../components/jsondata/device";

const App = () => {
  useEffect(() => {
    updatedatabase();
  }, []);
  const updatedatabase = async () => {
    const { error, data, count } = await supabase
      .from("test")
      .select("*", { count: "exact", head: true });
    console.log(count);
    return data;
  };

  return (
    <div className="">
      <Marque />
      <select
        value={"laptop"}
        onChange={""}
        className=" h-[50px]  bg-white cursor-pointer pl-3 outline-none focus:ring-4 focus:ring-blue-200 md:text-lg shadow-md shadow-zinc-200/30 rounded-[10px]"
      >
        {deviceType.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>{" "}
    </div>
  );
};

export default App;

App.getLayout = function getLayout(page) {
  return <>{page}</>;
};
