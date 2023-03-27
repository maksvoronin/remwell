import { Container, TextLink } from "@/components";
import { FC } from "react";
import s from "./normativedocsblock.module.scss";

const NormativeDocsBlock: FC = () => {
  return <Container className={s.normativeDocsBlock}>
    <h1>Нормативная документация</h1>
    <p>
      <TextLink href="/svodka.pdf" newTab>Перечень рекомендуемых мероприятий по улучшению условий труда</TextLink><br/>
      <TextLink href="/perecen.pdf" newTab>Сводная ведомость результатов проведения СОУТ</TextLink>
    </p>
  </Container>
}

export default NormativeDocsBlock;