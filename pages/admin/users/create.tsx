import { AdminLayout } from "@/components";
import { UserCreate } from "@/widgets";

export default function create() {
  return <AdminLayout title="Создание аккаунта">
    <h1>Создать аккаунт</h1>
    <UserCreate />
  </AdminLayout>
}