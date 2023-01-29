import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "../styles/style.css";
import CartContextProvider from "../components/context/cartContext";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <CartContextProvider>
          <Layout>{page}</Layout>
        </CartContextProvider>
      </>
    ));

  return getLayout(
    <>
      <QueryClientProvider client={queryClient}>
        <NextNProgress color="#0F1133" />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
