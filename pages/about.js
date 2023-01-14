import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const text = [
    "Wrapkit India brings you the coolest new way to spice up your digital lifestyle, allowing you to customise your mobile and digital devices as an expression of your own unique identity. With removable, adhesive-backed premium vinyl skins that both protect and personalise your electronic device.","Our goal from the beginning was to be the best in protection while also providing an affordable, stylish alternative to bulky cases. As consumers, we were frequently dissatisfied with cases that concealed the essence of a device. What was more important, we reasoned? A stylish charger to be proud of? Or an unsightly, bulky case that frequently felt like a brick.","It’s been a fantastic few years creating the best in skin protection. Since 2022, thousands of people worldwide have been wearing our skins on their devices.","As Wrapkit India expands, we will continue to work to improve design and protection while retaining the device’s true style."
  ]
  return (
    <>
     <style jsx>
            {`
            .privacy{
  padding: 50px 18px;
}
.privacy > div > p{
  font-size: 17px;
  color: #5c5c5c;
}
.privacy > div > h1 ,  .privacy > div >  h2{
  font-size: 25px;
  font-weight:500;
  line-height: 1.2;
  color: #333;
}
.privacy > div {
  display: flex; flex-direction: column;
  gap:15px;
}
`}
        </style>
<div className=" py-8 h-[100px] bg-[#0F1133] text-center  items-center justify-center text-xl text-white fond-heading ">
     
    <h3 className='md:text-3xl text-2xl font-semibold text-center text-white'> About Us</h3>
    </div>
        <div className="flex flex-col gap-10 mt-10 privacy max-w-4xl mx-auto">
            {text.map((desc,i)=>(
 <p key={i}>
  {desc}
                </p>
            ))}
               
            </div>

    </>
  )
}

