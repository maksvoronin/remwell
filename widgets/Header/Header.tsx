import { Link, Logotype } from "@/components";
import s from "./header.module.scss";
import { FC, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const Header: FC = () => {
  const [opennedMenu, setOpennedMenu] = useState<boolean>(false);

  const scrollToElement = (id: string) => {
    setOpennedMenu(false);
    return scroll.scrollMore(document.querySelector(id)!.getBoundingClientRect().top - 50)
  }

  return (
    <header className={`${s.header}`}>
      <Logotype width={76} height={60} />
      <div className={`${s.linksContainer} ${opennedMenu && s.opennedLinksContainer}`}>
        <div className={s.links}>
          <Link href="/">Главная</Link>
          <Link href="/#services" onClick={() => scrollToElement("#services")}>Услуги</Link>
          <Link href="/#sponsors" onClick={() => scrollToElement("#sponsors")}>Поставщикам</Link>
          <Link href="/feedback">Отзывы</Link>
          <Link href="/#contacts" onClick={() => scrollToElement("#contacts")}>Контакты</Link>
          <Link href="/#about" onClick={() => scrollToElement("#about")}>О компании</Link>
        </div>
        <div className={s.links}>
          <Link href="/blog">Блог</Link>
        </div>
      </div>
      <div
        className={`${s.openMobileMenu} ${opennedMenu && s.activeMobileMenu}`}
        onClick={() => setOpennedMenu(!opennedMenu)}
      >
        <span className={s.fl}></span>
        <span className={s.sl}></span>
        <span className={s.tl}></span>
      </div>
    </header>
  );
};

export default Header;
