import React, { useEffect } from "react";
import Marque from "../components/commonComponent/marque";
import { supabase } from "../components/supabase/supabase";

const App = () => {
  useEffect(() => {
    updatedatabase();
  }, []);
  const updatedatabase = async () => {
    const { data, error } = await supabase.from("test").insert({
      name: "fddd",
    });
    console.log(data, error);
  };

  return (
    <div className="">
      <Marque />
    </div>
  );
};

export default App;

App.getLayout = function getLayout(page) {
  return <>{page}</>;
};
