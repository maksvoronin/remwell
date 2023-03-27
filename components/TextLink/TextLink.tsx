import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import s from "./textlink.module.scss";

const TextLink: FC<PropsWithChildren<{href: string, className?: string}>> = ({children, href, className}) => {
  return <Link href={href} className={s.textlink}>{children}</Link>
}

export default TextLink;