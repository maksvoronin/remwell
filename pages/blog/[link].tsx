import { BlogResponse } from "@/types";
import { BlogContainer, Footer, Header, PostContainer } from "@/widgets";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const { link } = router.query;

  const [postLoading, setPostLoading] = useState<{
    isLoading: boolean;
    items: any;
  }>({ isLoading: false, items: {} });

  useEffect(() => {
    if (link) {
      setPostLoading({ isLoading: true, items: postLoading.items });
      fetch("/api/blog/get?link=" + link)
        .then((j) => j.json())
        .then((response: BlogResponse) => {
          setPostLoading({ isLoading: false, items: response });
        })
        .catch(() => setPostLoading({ isLoading: false, items: [] }));
    }
  }, [link]);

  return (
    <>
      <Head>
        <title>{link} / Ремвелл</title>
      </Head>
      <Header />
      <PostContainer post={postLoading.items} />
      <Footer />
    </>
  );
}
