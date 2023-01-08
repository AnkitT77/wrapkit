import React from "react";
import Mobilemenu from "../components/navbar/mobilemenu";

const App = () => {


  return (
    <div className="">
 <Mobilemenu/>
    </div>
  );
};





export default  App;


App.getLayout = function getLayout(page) {
return(
    <>
        {page}
    </>
)

}