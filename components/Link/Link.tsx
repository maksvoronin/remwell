import { FC, MouseEventHandler, PropsWithChildren } from "react";
import Link from "next/link";
import s from "./link.module.scss";

const CustomLink: FC<PropsWithChildren<{href: string, onClick?: MouseEventHandler<HTMLAnchorElement>}>> = ({
  children,
  href,
  onClick
}) => {
  return (
    <Link href={href} onClick={onClick} className={s.customLink}>
      {children}
    </Link>
  );
};

export default CustomLink;
