import { AdminLayout } from "@/components";
import { BlogController, BlogManager } from "@/widgets";

export default function Blog() {
  return <AdminLayout title="Управление блогом">
    <h1>Управление блогом</h1>
    <BlogController />
    <BlogManager />
  </AdminLayout>;
}
