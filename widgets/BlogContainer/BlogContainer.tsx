import { BlogCard, Container, Preload } from "@/components";
import { BlogResponse } from "@/types";
import { FC, useEffect, useState } from "react";
import s from "./blogcontainer.module.scss";

const BlogContainer: FC = () => {
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
    <Container className={s.blogContainer}>
      <h1>Блог компании</h1>
      {blogLoading.isLoading && <Preload />}
      <div className={s.blogPosts}>
        {blogLoading.items.length > 0 && !blogLoading.isLoading ? (
          blogLoading.items.map((e: BlogResponse) => (
            <BlogCard
              key={e.title.length + Math.random()}
              title={e.title}
              author={e.author}
              date={e.date}
              description={e.description}
              link={e.link}
            />
          ))
        ) : (
          <p>В блоге пока нет новостей</p>
        )}
      </div>
    </Container>
  );
};

export default BlogContainer;
