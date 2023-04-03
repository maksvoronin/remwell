import { FeedbackForm, Footer, Header, Slider } from "@/widgets";
import Head from "next/head";

export default function Feedback() {
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
