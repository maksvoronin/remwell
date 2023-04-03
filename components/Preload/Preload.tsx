import { FC } from "react";
import s from "./preload.module.scss";
import Image from "next/image";

const Preload:FC = () => {
  return <div className={s.preloader}>
    <Image src={"/loading.svg"} width={20} height={20} alt={"Loader circle"} />
    <p>Загрузка...</p>
  </div>
}

export default Preload;