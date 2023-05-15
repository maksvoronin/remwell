import { FC, PropsWithChildren } from "react";
import s from "./adminlayout.module.scss";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Head from "next/head";

const AdminLayout: FC<PropsWithChildren<{title: string}>> = ({ children, title }) => {
  return (
    <div className={s.adminLayout}>
      <Head>
        <title>{title}</title>
      </Head>
      <AdminSidebar />
      {children}
    </div>
  );
};
export default AdminLayout;
