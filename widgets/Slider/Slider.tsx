import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import s from "./slider.module.scss";
import { Montserrat } from "next/font/google";
import { Navigation } from "swiper";

const montserrat = Montserrat({ subsets: ["latin"] });

const Slider: FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      className={`${s.slider} ${montserrat.className}`}
      modules={[Navigation]}
      navigation
    >
      <SwiperSlide
        style={{ backgroundImage: `url(/head_1.png)` }}
        className={s.slide}
      >
        <h1>Ремвелл</h1>
        <p>
          Оперативные ремонт и техническое обслуживание локомотивных устройств
          безопасности
        </p>
        <span>Оперативность</span>
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(/head_2.png)` }}
        className={s.slide}
      >
        <h1>Ремвелл</h1>
        <p>
          Выездные работы с собственным оборудованием для проведения ТО-3/ТР-1
        </p>
        <span>Выездные работы</span>
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(/head_3.png)` }}
        className={s.slide}
      >
        <h1>Ремвелл</h1>
        <p>
          Гарантия на предоставляемые работы в соответствии с нормативной
          документацией
        </p>
        <span>Гарантия</span>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
