import React from 'react'

export default function privacy() {
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
    <div className=" py-8 h-[100px] bg-[#0F1133] text-center  items-center justify-center  text-center text-xl text-white fond-heading ">
     
    <h3 className='md:text-3xl text-2xl font-semibold text-center text-white'> Privacy policy</h3>
    </div>
        <div className="flex flex-col gap-10 mt-10 privacy max-w-4xl mx-auto">
            <div>
                <p>This page is used to inform website visitors about our policies regarding the collection, use, and disclosure of Personal Information if they decide to use our Service, the website www.wrapcart.in. You agree to the collection and use of information in accordance with this policy if you choose to use our Service. We collect Personal Information to provide and improve the Service. Except as stated in this Privacy Policy, we will not use or share your information with anyone. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as those found in our Terms and Conditions, which can be found at www.wrapkit.in.
                </p>
            </div>
        </div>
    </>
  )
}
