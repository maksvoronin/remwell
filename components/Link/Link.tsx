import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import s from "./link.module.scss";

const CustomLink: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => {
  return (
    <Link href={href} className={s.customLink}>
      {children}
    </Link>
  );
};

export default CustomLink;
