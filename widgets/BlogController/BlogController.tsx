import { FC } from "react";
import s from "./blogcontroller.module.scss";
import { DashboardControllerButton } from "@/components";

const BlogController: FC = () => {
  return <div className={s.blogController}>
    <DashboardControllerButton href="/admin/blog/create">Создать пост</DashboardControllerButton>
  </div>;
};

export default BlogController;
