import { FC, PropsWithChildren } from "react";
import s from "./container.module.scss";


const Container: FC<PropsWithChildren<{className?: string, id?: string}>> = ({ className, id, children }) => {
  return <div className={`${s.container} ${className ? className : ""}`} id={id}>{children}</div>;
};

export default Container;
