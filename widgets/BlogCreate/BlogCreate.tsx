import { FC, useState } from "react";
import s from "./blogcreate.module.scss";

const BlogCreate: FC = () => {

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [url, setURL] = useState<string>();
  const [text, setText] = useState<string>();

  const createPost = () => {
    fetch("/api/blog/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        author, description, link: url, text,
        token: window.localStorage.token
      })
    }).then(r => r.json()).then(response => {
      if(response.code) {
        return alert(response.text);
      }
      return alert("Пост создан");
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

      <button className={s.save} onClick={createPost}>Опубликовать</button>
    </div>
  );
};

export default BlogCreate;
