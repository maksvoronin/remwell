import { useState } from "react";
import s from "./usercreate.module.scss";

const UserCreate = () => {
  const [name, setName] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createUser = () => {
    fetch("/api/auth/register",
      {
        method: "POST",
        body: JSON.stringify({
          name, login, password, token: window.localStorage.token
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(r => r.json()).then(response => {
      if(response.code) return alert("Произошла ошибка");
      return alert("Пользователь создан")
    })
  };

  return (
    <div className={s.userCreate}>
      <input
        type="text"
        placeholder="Имя Фамилия"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <input
        type="text"
        placeholder="Логин"
        value={login}
        onChange={({ target }) => setLogin(target.value)}
      />

      <input
        type="text"
        placeholder="Пароль"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button className={s.save} onClick={createUser}>
        Создать аккаунт
      </button>
    </div>
  );
};

export default UserCreate;
