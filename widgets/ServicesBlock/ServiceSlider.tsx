import { Container } from "@/components";
import { FC } from "react";
import s from "./serviceslider.module.scss";
import data from "@/services.json";

const ServiceSlider: FC = () => {
  return (
    <Container className={s.services} id={"services"}>
      <h1>Перечень наших услуг</h1>
      <p>В число ремонтируемых приборов входит</p>
      <div className={s.servicesList}>
        {data.map(e => <div className={s.service} key={e.name.length}>{e.name}</div>)}
      </div>
    </Container>
  );
};

export default ServiceSlider;
