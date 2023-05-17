import { AdminLayout } from "@/components";
import { UsersController } from "@/widgets";

export default function Users() {
  return <AdminLayout title="Управление пользователями">
    <h1>Управление пользователями</h1>
    <UsersController />
  </AdminLayout>;
}
