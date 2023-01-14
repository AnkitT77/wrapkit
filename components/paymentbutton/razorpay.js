// import { sendemail } from "../sendemail/ordersuccessemail";
import { supabase } from "../supabase/supabase";
import { initializeRazorpay } from "../utils/razorpay";

async function displayRazorpay(email, name, mobilenumber, amount1, item) {

  if (email === null) {
    setlogin(true);
  } else {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await fetch("/api/razorpay", {
      method: "POST",
      body: JSON.stringify({ amount: amount1 }),
    });

    const r = await result.json();
    if (!result) {
      alert("Server error. Are you online?");
      return;
    } else {
      const { amount, id: order_id, currency } = r;
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
        amount: amount,
        currency: currency,
        name: name,
        description: "WrapKit",
        order_id: order_id,
        handler: async function (response) {
          const data1 = {
            email: email,
            amount: amount,
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          //await updatePaymentSuccess(order_id, email);
          alert(JSON.stringify(data1));
        },
        prefill: {
          name: name,
          email: email,
          contact: mobilenumber,
        },
        theme: {
          color: "#2563eb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        alert(`Payment Failed ${response.error.reason}`);
      });
      paymentObject.open();
    }
  }
}

const updatePaymentSuccess = async (order_id, email) => {
  const { data, error } = await supabase.from("orderHistory")
    .update({
      paymentstatus: true,
      order_id: order_id
    })
    .match({ email: email });
  window.location.href = "/order-thank-you";
}





export default displayRazorpay;




