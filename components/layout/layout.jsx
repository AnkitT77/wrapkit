import React from "react";
import Footer from "../footer/footer";
import What from "../old/what";
import TopNav from "../navbar/header";

export default function Layout({ children }) {
 
  return (
    <>
      <TopNav/>
      <div className="min-h-screen">{children}</div>
      <What />
      <Footer/>
    </>
  );
}
