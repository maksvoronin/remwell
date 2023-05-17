import { FC, useEffect, useState } from "react";
import { DashboardControllerButton, UserLine } from "@/components";
import s from "./userscontroller.module.scss";

const UsersController: FC = () => {

  const [usersLoading, setUsersLoading] = useState<{
    isLoading: boolean;
    items: any[];
  }>({ isLoading: false, items: [] });

  useEffect(() => {
    setUsersLoading({ isLoading: true, items: usersLoading.items });
    fetch(`/api/auth/all?token=${window.localStorage.token}`)
      .then((j) => j.json())
      .then((response: any[]) => {
        setUsersLoading({ isLoading: false, items: response });
      })
      .catch(() => setUsersLoading({ isLoading: false, items: [] }));
  }, []);

  return (
    <div className={s.usersController}>
      <DashboardControllerButton href="/admin/users/create">Создать аккаунт</DashboardControllerButton>
      {usersLoading.items.length > 0 && !usersLoading.isLoading ? (
        usersLoading.items.map((e: any) => (
          <UserLine
            key={e.name.length + Math.random()}
            name={e.name}
            login={e.login}
            id={e._id}
          />
        ))
      ) : (
        <p>В блоге пока нет новостей</p>
      )}
    </div>
  );
};

export default UsersController;
