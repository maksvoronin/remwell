import { Container, TextLink } from "@/components";
import { FC } from "react";
import s from "./sponsorsblock.module.scss";

const SponsorsBlock: FC = () => {
  return (
    <Container className={s.sponsorsBlock} id={"sponsors"}>
      <h1>Поставщикам</h1>
      <p>
        Компания «РЕМВЕЛЛ» готова к сотрудничеству в части закупок как запасных
        частей, так и готовых изделий локомотивных устройств безопасности. Мы
        ценим качество поставляемой продукции, а также прозрачность,
        оперативность и надежность поставщиков. Если у вас есть предложения,
        пожалуйста, направьте их по адресу <TextLink href={"mailto:office@rem-well.ru"}>office@rem-well.ru</TextLink>
      </p>
    </Container>
  );
};

export default SponsorsBlock;
