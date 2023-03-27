import { Montserrat } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import s from "./container.module.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

const Container: FC<PropsWithChildren<{className?: string}>> = ({ className, children }) => {
  return <div className={`${s.container} ${className ? className : ""} ${montserrat.className}`}>{children}</div>;
};

export default Container;
