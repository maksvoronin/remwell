import { Footer, Header, LoginForm } from "@/widgets";
import Head from "next/head";

export default function Blog() {
  return(
    <>
      <Head>
        <title>Админ-панель / Ремвелл</title>
      </Head>
      <Header />
      <LoginForm />
      <Footer />
    </>
  )
}