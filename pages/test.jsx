import React from "react";
import Popupcart from "../components/product/popupcart";
import useCart from "../components/context/cartHooks";
import {GridLayout} from "../components/commonComponent/features";
import Marque from "../components/commonComponent/marque";

const App = () => {

    const {cartItem} = useCart();

    console.log(cartItem)



  return (
    <div className="">
      <Marque/>
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
