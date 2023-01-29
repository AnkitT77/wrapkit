import React, { useEffect } from "react";
import Marque from "../components/commonComponent/marque";
import { supabase } from "../components/supabase/supabase";
import Pagination from "../components/utils/pagination";

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
      <Pagination total={100} showing={50} />
    </div>
  );
};

export default App;

App.getLayout = function getLayout(page) {
  return <>{page}</>;
};
