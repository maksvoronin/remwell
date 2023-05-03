import { Container } from "@/components";
import { FC } from "react";
import s from "./loginform.module.scss";

const LoginForm: FC = () => {
  return <Container className={s.loginForm}>
    <h1>Вход</h1>
    <input placeholder="Логин" type="text" />
    <input placeholder="Пароль" type="password" />
    <button>Test</button>
  </Container>
}

export default LoginForm;