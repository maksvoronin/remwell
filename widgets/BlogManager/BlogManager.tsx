import { FC, useEffect, useState } from "react";
import s from "./blogmanager.module.scss";
import { BlogManagerCard } from "@/components";
import { BlogResponse } from "@/types";

const BlogManager: FC = () => {
  const [blogLoading, setBlogLoading] = useState<{
    isLoading: boolean;
    items: any[];
  }>({ isLoading: false, items: [] });

  useEffect(() => {
    setBlogLoading({ isLoading: true, items: blogLoading.items });
    fetch("/api/blog/all")
      .then((j) => j.json())
      .then((response: BlogResponse[]) => {
        setBlogLoading({ isLoading: false, items: response });
      })
      .catch(() => setBlogLoading({ isLoading: false, items: [] }));
  }, []);

  return (
    <div className={s.blogManager}>
      {blogLoading.items.length > 0 && !blogLoading.isLoading ? (
        blogLoading.items.map((e: BlogResponse) => (
          <BlogManagerCard
            key={e.title.length + Math.random()}
            title={e.title}
            author={e.author}
            description={e.description}
            link={e.link}
            id={e._id ? e._id : ""}
          />
        ))
      ) : (
        <p>В блоге пока нет новостей</p>
      )}
    </div>
  );
};

export default BlogManager;
