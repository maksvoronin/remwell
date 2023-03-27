import { Container, Logotype } from "@/components";
import Image from "next/image";
import { FC } from "react";
import s from "./remwellblock.module.scss";

const RemwellBlock: FC = () => {
  return (
    <Container className={`${s.remwellBlock}`}>
      <div className={s.texts}>
        <h1>РЕМВЕЛЛ</h1>
        <p>
          Компания, занимающаяся техническим обслуживанием и ремонтом
          локомотивных устройств безопасности.
        </p>
        <p>
          В числе сотрудников – специалисты с многолетним стажем и опытом в
          данной отрасли.
        </p>
        <p>
          К нам обращаются владельцы железнодорожного подвижного состава для
          проведения ТО-2, ТО-3, ТР-1, ремонта и других работ касательно
          приборов безопасности, что позволит получить допуск подвижного состава
          на пути общего пользования инфраструктуры ОАО «РЖД».
        </p>
      </div>
      <div className={s.image}>
        <img src={"/logo.png"} alt={"Remwell logo"} width={233} height={184} style={{textAlign: "center"}} />
      </div>
    </Container>
  );
};

export default RemwellBlock;
