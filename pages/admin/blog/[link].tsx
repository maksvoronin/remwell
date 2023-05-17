import { AdminLayout } from "@/components";
import { BlogResponse } from "@/types";
import { BlogEdit } from "@/widgets";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditBlog() {

  const router = useRouter();
  const { link } = router.query;

  const [postLoading, setPostLoading] = useState<{
    isLoading: boolean;
    items: BlogResponse;
  }>({ isLoading: false, items: {} as BlogResponse });

  useEffect(() => {
    if (link) {
      setPostLoading({ isLoading: true, items: postLoading.items });
      fetch("/api/blog/get?link=" + link)
        .then((j) => j.json())
        .then((response: BlogResponse) => {
          setPostLoading({ isLoading: false, items: response });
        })
        .catch(() => setPostLoading({ isLoading: false, items: {} as BlogResponse }));
    }
  }, [link]);


  return <AdminLayout title="Редактирование блога">
    <h1>Редактирование блога {link}</h1>
    <BlogEdit blog={postLoading.items} />

  </AdminLayout>;
}