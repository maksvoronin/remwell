import {
  AboutBlock,
  ContactBlock,
  Footer,
  Header,
  NormativeDocsBlock,
  RemwellBlock,
  ServiceSlider,
  Slider,
  SponsorsBlock,
} from "@/widgets";
import Head from "next/head";

export default function home() {
  return (
    <>
      <Head>
        <title>Ремвелл</title>
        <meta name="description" content="Ремвелл" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />
      <RemwellBlock />
      <ServiceSlider />
      <SponsorsBlock />
      <ContactBlock />
      <AboutBlock />
      <NormativeDocsBlock />
      <Footer />
    </>
  );
}
