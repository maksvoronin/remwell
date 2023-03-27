import { Container, TextLink } from "@/components";
import { FC } from "react";
import s from "./contactblock.module.scss";

const ContactBlock: FC = () => {
  return <Container className={s.contactBlock}>
    <h1>Контакты</h1>
    <p>
      Адрес: Белово, ул. Кузбасская д. 10/1<br/>
      Почта: <TextLink href="">office@rem-well.ru</TextLink><br/>
      Телефон: <TextLink href="">+7 (903) 984-93-93</TextLink>
    </p>
  </Container>
}

export default ContactBlock;