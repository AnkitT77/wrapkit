import React from "react";
import Footer from "../footer/footer";
import What from "../old/what";
import TopNav from "../navbar/header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>WrapKit : Mobile Skins &amp; Mobile Wraps – WrapKit Skins</title>
        <meta
          name="description"
          content="Mobile skins for 500+ phone models. India's leading mobile skin manufacturer. Samsung Mobile Skins, Vivo Mobile Skins, Oppo Mobile Skins, Apple Mobile Skins, Realme Mobile Skins, Poco Mobile Skins, Moto Mobile Skins etc. Best mobile covers in India. Best mobile skins in India. Mobile Skins in USA, UAE &amp; UK."
        />
        <meta name="keywords" content="" />
      </Head>
      <TopNav />
      <div className="min-h-screen bg-[#FFF]">{children}</div>
      <What />
      <Footer />
    </>
  );
}
