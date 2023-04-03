import { FC } from "react";
import s from "./blogcard.module.scss";
import Link from "next/link";

const BlogCard: FC<{
  link: string;
  title: string;
  date: number;
  author: string;
  description: string;
}> = ({ link, title, date, author, description }) => {
  return (
    <div className={s.blogCard}>
      <h1>{title}</h1>
      <p className={s.description}>{description}</p>
      <p className={s.subText}>
        {author} • {new Date(date).toLocaleDateString("ru")}
      </p>
      <Link href={`blog/${link}`}>Читать</Link>
    </div>
  );
};

export default BlogCard;
