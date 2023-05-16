import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import s from "./dashboardcontrollerbutton.module.scss";

const DashboardControllerButton: FC<PropsWithChildren<{href: string}>> = ({children, href}) => {
  return <Link href={href} className={s.dashboardControllerButton}>{children}</Link>
}

export default DashboardControllerButton;