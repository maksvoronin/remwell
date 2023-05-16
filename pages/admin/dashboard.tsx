import { AdminLayout } from "@/components";
import { DashboardController, DashboardStat } from "@/widgets";

export default function Dashboard() {

  return <AdminLayout title="Панель управления">
    <h1>Панель управления</h1>
    <DashboardStat />
    <DashboardController />
  </AdminLayout>;
}
