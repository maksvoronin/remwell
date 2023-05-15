import { Container } from "@/components";
import { FC, useState } from "react";
import s from "./loginform.module.scss";
import { useRouter } from "next/router";

const LoginForm: FC = () => {
  const router = useRouter();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendData = () => {
    fetch(`/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({login, password}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(r => r.json())
    .then(response => {
      if(response.code) {
        if(response.code === 1) return alert("Укажите логин и пароль");
        if(response.code === 3) return alert("Админ не найден, проверьте логин");
        if(response.code === 4) return alert("Неправильный пароль");
        return alert(response.text);
      }
      window.localStorage.token = response.token;
      router.push("/admin/dashboard");
    });
  }

  return <Container className={s.loginForm}>
    <h1>Вход</h1>
    <input placeholder="Логин" type="text" onChange={({target}) => setLogin(target.value)} value={login} />
    <input placeholder="Пароль" type="password" onChange={({target}) => setPassword(target.value)} value={password} />
    <button onClick={sendData}>Войти</button>
  </Container>
}

export default LoginForm;