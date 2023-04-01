import { FC, PropsWithChildren } from "react";
import s from "./container.module.scss";


const Container: FC<PropsWithChildren<{className?: string}>> = ({ className, children }) => {
  return <div className={`${s.container} ${className ? className : ""}`}>{children}</div>;
};

export default Container;
