import { FC } from "react";
import s from "./dashboardcontroller.module.scss";
import { DashboardControllerButton } from "@/components";

const DashboardController: FC = () => {
  return <div className={s.dashboardController}>
    <DashboardControllerButton href="/admin/blog/create">Создать пост</DashboardControllerButton>
    <DashboardControllerButton href="/admin/blog/edit">Изменить пост</DashboardControllerButton>
    <DashboardControllerButton href="/admin/blog/delete">Удалить пост</DashboardControllerButton>
    <DashboardControllerButton href="/admin/feedback/delete">Удалить отзыв</DashboardControllerButton>
  </div>
}

export default DashboardController;