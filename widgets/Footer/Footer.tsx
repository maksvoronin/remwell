import { Container, TextLink } from "@/components";
import { FC } from "react";
import s from "./footer.module.scss";

const Footer: FC = () => {
  return <Container className={s.footer}>
    <p>Ремвелл</p>
    <p><TextLink href="tel:+7 (903) 984-93-93">+7 (903) 984-93-93</TextLink></p>
    <p><TextLink href="mailto:office@rem-well.ru">office@rem-well.ru</TextLink></p>
    <p>Белово, ул. Кузбасская д. 10/1</p>
  </Container>
}

export default Footer;