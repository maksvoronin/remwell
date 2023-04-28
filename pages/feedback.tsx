import { FeedbackForm, Footer, Header, Slider } from "@/widgets";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function feedback() {
   
  return (
    <>
      <Head>
        <title>Отзывы / Ремвелл</title>
      </Head>
      <Header />
      <Slider />
      <FeedbackForm />

      <Footer />
    </>
  );
}
