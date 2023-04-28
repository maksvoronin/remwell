import { Html, Head, Main, NextScript } from 'next/document'
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/remwell").then(() => console.log("Database Connected"));

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
