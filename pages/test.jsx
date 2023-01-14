import React from "react";
import Popupcart from "../components/product/popupcart";
import useCart from "../components/context/cartHooks";

const App = () => {

    const {cartItem} = useCart();

    console.log(cartItem)



  return (
    <div className="">
        <Popupcart
            qty={1}
            data={""}
            passclose={()=> ""}
        />    </div>
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
