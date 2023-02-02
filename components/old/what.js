import React from "react";
import Image from "next/image";

export default function what() {
  return (
    <>
      {" "}
      <div className=" fixed bottom-10 right-6  rounded-full">
        <a href="https://wa.me/919421193881/?text=Hii WrapKit, %0a %0a  I am interested in booking a Skins. Kindly guide me through">
          <Image
            src="/imgs/whatsapp.png"
            width={50}
            height={50}
            className="cursor-pointer  "
          ></Image>
        </a>
      </div>
    </>
  );
}
