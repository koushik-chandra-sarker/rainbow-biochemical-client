import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/assets/imgs/logo.jpg"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;amp;amp;subset=latin-ext"/>
        <link rel="stylesheet" type="text/css" href="/assets/fonts/fonts.min.css"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}