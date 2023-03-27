import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import s from "./textlink.module.scss";

const TextLink: FC<PropsWithChildren<{href: string, className?: string, newTab?: boolean}>> = ({children, href, className, newTab}) => {
  return <Link href={href} className={`${s.textlink} ${className ? className : ""}`} target={newTab ? "_blank" : ""}>{children}</Link>
}

export default TextLink;