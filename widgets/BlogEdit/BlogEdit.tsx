import { BlogResponse } from "@/types";
import { FC, useEffect, useState } from "react";
import s from "./blogedit.module.scss";

const BlogEdit: FC<{ blog: BlogResponse }> = ({ blog }) => {

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [url, setURL] = useState<string>();
  const [text, setText] = useState<string>();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setAuthor(blog.author);
      setURL(blog.link);
      setText(blog.text);
    }
  }, [blog]);

  const updatePost = () => {
    fetch("/api/blog/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: blog._id,
        title,
        author, description, link: url, text,
        token: window.localStorage.token
      })
    }).then(r => r.json()).then(response => {
      if(response.code) {
        return alert(response.text);
      }
      return alert("Пост изменен");
    });
  }

  const deletePost = () => {
    fetch("/api/blog/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: blog._id,
        token: window.localStorage.token
      })
    }).then(r => r.json()).then(response => {
      if(response.code) {
        return alert(response.text);
      }
      return alert("Пост удален");
    });
  }

  return (
    <div className={s.blogEdit}>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <input
        type="text"
        placeholder="Описание"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <input
        type="text"
        placeholder="Автор"
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
      />
      <input
        type="text"
        placeholder="Ссылка"
        value={url}
        onChange={({ target }) => setURL(target.value)}
      />
      <textarea
        placeholder="Текст"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />

      <button className={s.save} onClick={updatePost}>Сохранить</button>
      <button onClick={deletePost}>Удалить пост</button>
    </div>
  );
};

export default BlogEdit;
