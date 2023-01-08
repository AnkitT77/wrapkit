import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Partytown } from '@builder.io/partytown/react';
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <Partytown debug={true} forward={['dataLayer.push']} />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4LX73BLQDF" type="text/partytown" />

                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
                        rel="stylesheet"
                    />

                    <script
                    async
                        type="text/partytown"
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-4LX73BLQDF')`
                        }}
                    />


                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-4LX73BLQDF"
                        height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
                </body>
            </Html>
        )
    }
}

export default MyDocument