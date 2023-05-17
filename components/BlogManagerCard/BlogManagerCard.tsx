import { FC } from "react";
import s from "./blogmanagercard.module.scss";
import { useRouter } from "next/router";

const BlogManagerCard: FC<{
  id: string;
  title: string;
  description: string;
  link: string;
  author: string;
}> = ({id, title, description, link, author}) => {

  const router = useRouter();

  return <div className={s.blogManagerCard}>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{author}</p>
    <p>{link}</p>
    <button onClick={() => router.push(`/admin/blog/${link}`)}>Изменить</button>
  </div>;
};

export default BlogManagerCard;
