import { Link, Logotype } from "@/components";
import s from "./header.module.scss";
import { FC, useState } from "react";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Header: FC = () => {
  const [opennedMenu, setOpennedMenu] = useState<boolean>(false);
  return (
    <header className={`${s.header}`}>
      <Logotype width={76} height={60} />
      <div className={`${s.linksContainer} ${opennedMenu && s.opennedLinksContainer}`}>
        <div className={s.links}>
          <Link href="/">Главная</Link>
          <Link href="/#services" onClick={() => scroll.scrollMore(document.querySelector('#services')!.getBoundingClientRect().top - 50)}>Услуги</Link>
          <Link href="/#sponsors" onClick={() => scroll.scrollMore(document.querySelector('#sponsors')!.getBoundingClientRect().top - 50)}>Поставщикам</Link>
          <Link href="/feedback">Отзывы</Link>
          <Link href="/contacts" onClick={() => scroll.scrollMore(document.querySelector('#contacts')!.getBoundingClientRect().top - 50)}>Контакты</Link>
          <Link href="/#about" onClick={() => scroll.scrollMore(document.querySelector('#about')!.getBoundingClientRect().top - 50)}>О компании</Link>
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
