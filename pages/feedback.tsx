import { FeedbackContainer, FeedbackForm, Footer, Header, Slider } from "@/widgets";
import Head from "next/head";

export default function feedback() {
   
  return (
    <>
      <Head>
        <title>Отзывы / Ремвелл</title>
      </Head>
      <Header />
      <Slider />
      <FeedbackForm />
      <FeedbackContainer />
      <Footer />
    </>
  );
}
