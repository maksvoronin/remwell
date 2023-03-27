import { Container } from "@/components";
import { FC } from "react";
import s from "./aboutblock.module.scss";

const AboutBlock: FC = () => {
  return (
    <Container className={s.aboutBlock}>
      <h1>О компании</h1>
      <p>
        Компания «РЕМВЕЛЛ» отличается максимально гибким подходом к каждому
        клиенту – в перечень услуг помимо ремонта и технического обслуживания
        входят снятие, установка и доставка локомотивных устройств безопасности,
        что позволяет полностью «встать на обслуживание» и положиться на нашу
        компанию в вопросе выпуска подвижного состава на пути общего
        пользования.
      </p>
    </Container>
  );
};

export default AboutBlock;
