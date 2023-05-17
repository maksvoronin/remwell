import { useState } from "react";
import s from "./usercreate.module.scss";

const UserCreate = () => {
  const [name, setName] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createUser = () => {};

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
        Опубликовать
      </button>
    </div>
  );
};

export default UserCreate;
