import { Container, TextLink } from "@/components";
import { FC } from "react";
import s from "./postcontainer.module.scss";
import { BlogResponse } from "@/types";

const PostContainer: FC<{ post: BlogResponse }> = ({ post }) => {
  if (post.text === "Post not found")
    return (
      <Container className={s.postContainer}>
        <h1>Такого поста нет</h1>
        <TextLink href={"/blog"}>Вернуться в блог</TextLink>
      </Container>
    );

  return (
    <Container className={s.postContainer}>
      <h1>{post.title}</h1>
      <p className={s.date}>
        {new Date(post.date).toLocaleDateString()} • {post.author} • /blog/
        {post.link}
      </p>
      <p className={s.description}>{post.description}</p>
      <p>{post.text}</p>
      <TextLink href={"/blog"}>Вернуться в блог</TextLink>
    </Container>
  );
};

export default PostContainer;
