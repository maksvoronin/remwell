import { Footer, Header, LoginForm } from "@/widgets";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Blog() {
  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.token) {
      fetch(`/api/auth/check?token=${window.localStorage.token}`)
        .then((r) => r.json())
        .then((response) => {
          if (!response.code) {
            router.push("/admin/dashboard");
          }
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Админ-панель / Ремвелл</title>
      </Head>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}
