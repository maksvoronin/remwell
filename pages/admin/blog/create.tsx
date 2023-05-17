import { AdminLayout } from "@/components";
import { BlogCreate } from "@/widgets";

export default function create() {
  return <AdminLayout title="Создать пост">
    <h1>Создать пост</h1>
    <BlogCreate />
  </AdminLayout>
}