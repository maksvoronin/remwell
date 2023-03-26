import { Link, Logotype } from "@/components";
import s from "./header.module.scss";
import { Montserrat } from "next/font/google";
import { FC, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

const Header: FC = () => {
  const [opennedMenu, setOpennedMenu] = useState<boolean>(false);
  return (
    <header className={`${s.header} ${montserrat.className}`}>
      <Logotype />
      <div className={`${s.linksContainer} ${opennedMenu && s.opennedLinksContainer}`}>
        <div className={s.links}>
          <Link href="/">Главная</Link>
          <Link href="/">Услуги</Link>
          <Link href="/">Поставщикам</Link>
          <Link href="/feedback">Отзывы</Link>
          <Link href="/">Контакты</Link>
          <Link href="/">О компании</Link>
        </div>
        <div className={s.links}>
          <Link href="/blog">Блог</Link>
        </div>
      </div>
      <div className={`${s.openMobileMenu} ${opennedMenu && s.activeMobileMenu}`} onClick={() => setOpennedMenu(!opennedMenu)}>
        <span className={s.fl}></span>
        <span className={s.sl}></span>
        <span className={s.tl}></span>
      </div>
    </header>
  );
};

export default Header;
