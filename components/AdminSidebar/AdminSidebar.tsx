import { FC, useEffect } from "react";
import s from "./adminsidebar.module.scss";
import Logotype from "../Logotype/Logotype";
import { useRouter } from "next/router";

const AdminSidebar: FC = () => {

  const router = useRouter();

  useEffect(() => {
    if(!window.localStorage.token) router.push("/admin");

    fetch(`/api/auth/check?token=${window.localStorage.token}`)
      .then(r => r.json())
      .then(response => {
        if(response.code) {
          router.push("/admin");
        }
      });
  }, []);

  return <div className={s.adminSidebar}>
    <div className={s.logotype}>
      <Logotype width={76} height={60} />
    </div>
    <div className={s.buttons}>
      <button onClick={() => router.push("/admin/dashboard")}>Главная</button>
      <button onClick={() => router.push("/admin/blog")}>Блог</button>
      <button onClick={() => router.push("/admin/feedback")}>Отзывы</button>
      <button onClick={() => router.push("/admin/users")}>Пользователи</button>
    </div>
  </div>
}

export default AdminSidebar;