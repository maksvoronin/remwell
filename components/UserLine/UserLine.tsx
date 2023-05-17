import { FC } from "react";
import s from "./userline.module.scss";

const UserLine: FC<{ name: string; login: string; id: string }> = ({
  name,
  login,
  id,
}) => {
  const deleteUser = () => {
    fetch(`/api/auth/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, token: window.localStorage.token }),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.code) return alert("Произошла ошибка");
        alert("Пользователь удалён");
      });
  };

  return (
    <div className={s.userLine}>
      <p>{name}</p>
      <p>{login}</p>
      <button onClick={deleteUser}>Удалить</button>
    </div>
  );
};

export default UserLine;
