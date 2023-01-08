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

                <h3 className='md:text-3xl text-2xl font-semibold text-center text-white'> Refund policy</h3>
            </div>
            <div className="flex flex-col gap-10 mt-10 privacy max-w-4xl mx-auto">
                <div>
                    <h1>Refunds/Cancellations
                    </h1>
                    <p>Thank you for your purchase. We hope you’re satisfied with your purchase. For more information on our return policy, please see the section below.</p>
                </div>
                <div>
                    <h2>RETURN PROCESS</h2>
                    <p>To return an item, please email customer service at wrapkit.in@gmail.com with a clear Image of the product’s. Your order will be picked up within 4 working days, and we will work on sending you a replacement within 3 working days of our team receiving the product.
                    </p>
                </div>

                <div>
                    <h2>CANCELLATIONS</h2>
                    <p>Orders cannot be cancelled once they have been shipped; however, you can cancel the order prior to shipping by visiting your my account page.</p>
                </div>
                <div>
                    <h2>REFUNDS</h2>
                    <p>We do not provide refunds once an order has been shipped. We do offer exchanges in the event of a faulty product. Please send us an email at wrapkit.in@gmail.com with a clear video of the product’s flaws and your Order ID. Your order will be picked up within 4 working days, and we will work to send you a replacement within 3 working days of our team receiving the product.
                    </p>
                </div>
            </div>
        </>
    )
}
